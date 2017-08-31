####  openssl 建立CA，服务器证书请求及签发，客户端测试连接，加密签名工具 等的详细步骤

- 客户端

``` 
        使用RSA算法产生公私钥和证书请求
        1. 输入测试用密码
             echo "123456" > password.txt
             echo "123456" >> password.txt
             如果使用密码文件的话，也可以每次都手工输入密码。（非必须）
   
        2. 生成RSA私钥
             openssl genrsa -aes256 -passout file:password.txt -out private_key.pem
             使用aes256 密码在password.txt文件中，密码内容是：123456，输出的私钥文件名是private_key.pem
   
        3. 把PEM格式的私钥转换为DER格式
             openssl rsa -inform PEM -outform DER -in private_key.pem  -passin file:password.txt -out private_key.der
   
        4. 使用 asn1parse 解析der格式的私钥文件
             openssl asn1parse -in private_key.der -inform DER
   
        5. 使用私钥生成公钥
             openssl rsa -in private_key.pem -passin file:password.txt -pubout -out public_key.pem
   
        6. 查看公钥的信息
             openssl rsa -in public_key.pem -pubin -text
   
        7. 使用公钥生成证书请求
             openssl req -new -inform PEM -outform PEM -in public_key.pem -key private_key.pem -keyform PEM -passin file:password.txt -out my_certificate.csr
        
        8. 查看证书请求的信息
             openssl req -in my_certificate.csr -text -noout
   
        {
             allinone: 其实上面的2-8步骤中的主要步骤：2 5 7 步可以合并为一条命令，生成的公钥和证书请求都在 allinone_publkey.pem 中
                  mkdir allinone; cd allinone
                  openssl req -new -passout file:../password.txt -keyout allinone_privkey.pem  -pubkey -out allinone_publkey.pem
   
             注意：1.passout和passin的区别
                       2.使用allinone 方式只能产生RSA密钥，DSA方式需要按照下面的步骤
        }
   
                  /********* 以下步骤需要在CA服务端设置完成，签署证书并且从CA获取完整证书信息后进行测试，先去完成CA *************/
                   9. 从CA获得根证书、中间证书（如果有）和用户证书（）
                      同时把根证书填入“信任证书文件” 
                       cp ../CA/private/cacert.crt .
                       cp ../CA/private/inter_cacert.crt .
                       cp ../CA/newcerts/03.pem ./my_certificate.crt
                       cp ../CA/newcerts/04.pem ./my_revoked_certificate.crt
                       vi /etc/pki/tls/certs/ca-bundle.crt
   
                  10.  验证证书的合法性
                       cat cacert.crt >> inter_cacert.crt
                       openssl verify -CAfile inter_cacert.crt my_certificate.crt
   
                  11. 使用ocsp客户端查询证书状态
                       openssl ocsp -issuer inter_cacert.crt -CAfile inter_cacert.crt -cert my_certificate.crt -host 127.0.0.1:12346 -VAfile cacert.crt
   
                  12. 使用用户证书建立ssl服务器
                       openssl s_server -accept 12345 -CAfile inter_cacert.crt -cert my_certificate.crt -key private_key.pem -pass file:password.txt 
                           (可以添加 -V(v)erify <depth> 来进行客户端证书验证, 大写V是强制客户端证书验证，小写v是非强制客户端证书象征)
                  
                  13. 用ssl客户端进行连接测试
                       openssl s_client -connect 127.0.0.1:12345
                       注意：1. 证书验证是否通过 2. 认证链是否正确
                       （如果服务端设置了 -V(v)erify 可以通过 -cert 和 -CAfile 添加客户端证书和证书链）
   
                  14. 可以用wireshark或者ssldump 进行网络抓包解析(但必须有服务端的私钥)，也可以用 stunnel 进行转换。
   
     使用DSA产生公私钥的步骤：
          1. 产生 DSA parameter file 
               openssl dsaparam -out dsa_param.prm 1024
     
          2. 生成 DSA 私钥
               openssl gendsa -out dsa_privkey.pem -des3 -passout file:password.txt dsa_param.prm
          {
               可以使用 openssl dsaparam -out dsa_param.prm 1024 -genkey 一起生成DSA 参数和DSA密钥。但没有办法设置密码
          }
     
          3. 查看DSA私钥信息
               openssl dsa -in dsa_privkey.pem -text -noout -passin file:password.txt
     
          3. 生成DSA公钥
              openssl dsa -in dsa_privkey.pem -passin file:password.txt -pubout -out dsa_pubkey.pem
     
           4. 查看DSA公钥信息
               openssl dsa -in dsa_pubkey.pem -pubin -text -noout
          后面接RSA中的步骤7

```
- CA服务端

``` 
  1. 创建相关目录和文件
            mkdir certs crl newcerts private
            echo "01" > serial
            echo "01" > crlnumber
            touch index.txt
            echo "654321" > private/password.txt
  
       2. 生成CA公私钥和证书
            分别创建公私钥和证书步骤同上（1-7 ）, 下面从第7步开始
            7. openssl req -new -in private/ca_public_key.pem -key private/cakey.pem -passin file:private/password.txt -out private/cacert.csr
            8. openssl ca -selfsign -in private/cacert.csr -out private/cacert_test.crt -keyfile private/cakey.pem -passin file:private/password.txt -config ./ca.conf
            但这一步需要先生成ca.conf配置文件。
  
            allinone 命令是： openssl req -new -passout file:private/password.txt -x509 -keyout private/cakey.pem -pubkey -out private/cacert.crt
  
       3. 拷贝并修改配置文件
            1.拷贝
                 cp /etc/./pki/tls/openssl.cnf ca.conf
  
            2. 修改[ CA_default ] 项目
  $diff ca.conf /etc/pki/tls/openssl.cnf
  45c45
  < dir           = /home/admin/tools/test/c-common-objects/PKI/CA                # Where everything is kept
  ---
  > dir           = ../../CA              # Where everything is kept
  53c53
  < certificate   = $dir/private/cacert.crt       # The CA certificate
  ---
  > certificate   = $dir/cacert.pem       # The CA certificate
  58c58
  < private_key   = $dir/private/cakey.pem # The private key
  ---
  > private_key   = $dir/private/cakey.pem# The private key
  84,85c84
  < #policy               = policy_match
  < policy                = policy_anything
  ---
  > policy                = policy_match
  105c104
  < commonName            = optional
  ---
  > commonName            = supplied
  131,132c130
  < #string_mask = MASK:0x2002
  < pkix = MASK:0x2002
  ---
  > string_mask = MASK:0x2002
  138c136
  < countryName_default           = CN
  ---
  > countryName_default           = GB
  143c141
  < stateOrProvinceName_default   = ZheJiang
  ---
  > stateOrProvinceName_default   = Berkshire
  146c144
  < localityName_default          = HangZhou
  ---
  > localityName_default          = Newbury
  149c147
  < 0.organizationName_default    = Alibaba
  ---
  > 0.organizationName_default    = My Company Ltd
  180,181c178
  < #basicConstraints=CA:FALSE
  < basicConstraints=CA:TRUE
  ---
  > basicConstraints=CA:FALSE
  
            3. 如果修改了[ req_distinguished_name ] 项目后
                 也可以先修改ca.cnf 后执行上面的证书生成可以自动填写信息
                  openssl req -new -passout file:private/password.txt -x509 -keyout private/cakey.pem -pubkey -out private/cacert.crt -config ca.conf -batch
                  或者如果已经存在私钥的情况下：
                  openssl req -new -passin file:private/password.txt -x509 -key private/cakey.pem -pubkey -out private/cacert_test1.crt -config ca.conf -batch
  
                 -batch 表示全部使用默认参数（非交互模式）
  
            4. 生成中间证书配置文件inter_ca.conf ,与ca.conf 的差别如下：
  $diff ca.conf inter_ca.conf
  53c53
  < certificate   = $dir/cacert.pem       # The CA certificate
  ---
  > certificate   = $dir/inter_cacert.crt         # The CA certificate
  58c58
  < private_key   = $dir/private/cakey.pem # The private key
  ---
  > private_key   = $dir/private/inter_cakey.pem # The private key
  105c105
  < commonName            = optional
  ---
  > commonName            = supplied
  180,181c180
  < #basicConstraints=CA:FALSE
  < basicConstraints=CA:TRUE
  ---
  > basicConstraints=CA:FALSE
  
        4. 生成中间证书请求
             openssl req -new -passout file:private/password.txt -keyout private/inter_cakey.pem -pubkey -out private/inter_cacert.csr
  
        5. 签发中建证书
             openssl ca -config ca.conf -in private/inter_cacert.csr -out private/inter_cacert.crt -passin file:private/password.txt
  
        6. 使用中间证书签发用户的证书请求
             openssl ca -config inter_ca.conf -in ../User/my_certificate.csr -passin file:private/password.txt -batch
             生成的证书在newcerts 中
  
        5. 查看新签发的证书信息
             openssl x509 -text -noout -in newcerts/03.pem
  
        6. 吊销证书
             先再生成一张测试证书
            （openssl ca -config inter_ca.conf -in ../User/my_certificate.csr -passin file:private/password.txt -batch。PS， 同一个csr 不限制生成证书的次数 ）
             openssl ca -config ca.conf -revoke newcerts/04.pem  -passin file:private/password.txt
  
        7. 生成吊销列表
             openssl ca -config ca.conf -gencrl -out crl/crl.pem -passin file:private/password.txt
            
        8. 查看吊销列表
             openssl crl -text -noout -in crl/crl.pem
  
        9. 启动ocsp服务
            openssl ocsp -index index.txt -CA private/inter_cacert.crt  -port 12346 -rsigner private/cacert.crt -rkey private/cakey.pem
  
      < 转到执行客户端后续步骤>
  
  工具：
       openssl ciphers 查看openssl支持的加密方式列表
            openssl ciphers -ssl3 -v
  
       openssl dgst 计算文件的数字摘要：
            1. 创建测试文件
                 echo 'Hello World!' >test.txt 
            2. 使用私钥对文件进行签名
                 openssl dgst -passin file:../password.txt -sign ../private_key.pem -out si.txt test.txt
            3. o使用公钥验证文件签名
                 penssl dgst -passin file:../password.txt  -verify ../public_key.pem -signature si.txt test.txt [Verified OK]
            4. 使用私钥验证文件签名
                 openssl dgst -passin file:../password.txt  -prverify ../private_key.pem -signature si.txt test.txt  [Verified OK]
            5. 修改文件内容
                 echo "1" >> test.txt
            6. 再次进行验证
                 openssl dgst -passin file:../password.txt  -prverify ../private_key.pem -signature si.txt test.txt [Verification Failure]
  
       openssl enc 对文件进行加解密
            1. 加密文件
                 openssl enc -bf-cbc -in test.txt -out enc_test.txt -kfile ../password.txt
            2. 解密文件
                 openssl enc -d -bf-cbc -in enc_test.txt -kfile ../password.txt -out dec_test.txt
  
       openssl rand 产生随机数
            openssl rand -base64 2
```

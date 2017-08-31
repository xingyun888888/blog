### 解决pip安装第三方https模块报错



- 在安装python第三方模块时出现错误

``` 
Installed /usr/local/python2.7.3/lib/python2.7/site-packages/supervisor-4.0.0_dev-py2.7.egg
Processing dependencies for supervisor==4.0.0-dev
Searching for meld3>=1.0.0
Reading https://pypi.python.org/simple/meld3/
Download error on https://pypi.python.org/simple/meld3/: [Errno 1] _ssl.c:504: error:14090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed -- Some packages may not be found!
Couldn't find index page for 'meld3' (maybe misspelled?)
Scanning index of all packages (this may take a while)
Reading https://pypi.python.org/simple/
Download error on https://pypi.python.org/simple/: [Errno 1] _ssl.c:504: error:14090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed -- Some packages may not be found!
No local packages or download links found for meld3>=1.0.0
error: Could not find suitable distribution for Requirement.parse('meld3>=1.0.0')
```

- 解决办法

```  
  上网查询了问题原因： 是curl的证书太老了需要下载最新的证书：
  下载最新的证书文件 、  
  $ wget http://curl.haxx.se/ca/cacert.pem  
  更名为ca-bundle.crt放置到默认目录  
  $ mv cacert.pem ca-bundle.crt 
  $ mv ca-bundle.crt /etc/pki/tls/certs 
```
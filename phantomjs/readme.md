
### Mac OS X && Windows

#### 1.[Phantomjs下载地址](http://phantomjs.org/download.html)

```
   按照系统下载对应的版本，
   
   macOS 下载： phantomjs-2.1.1-macosx.zip
   
   Windows下载：phantomjs-2.1.1-windows.zip
   
   并解压到用户目录下面，
   
   macOS 解压路径：
   
   /User/xxx/phantomjs-2.1.1-macosx
   
   Windows 解压路径：
   
   D:\phantomjs-2.1.1-windows ，并重命名为 D:\phantomjs

```
#### 2、PhantomJS不需要安装，解压即可使用

##### Windows PATH变量
``` 
  在“系统变量”选项区域中查看PATH变量，如果不存在，则新建变量 PATH，
  
  否则选中该变量，单击“编辑”按钮，在“变量值”文本框的起始位置添加 
  
  D:\phantomjs\bin，开始-运行-输入cmd，输入 phantomjs --version， 
   
  如果可以看到版本号，则安装成功。
```

##### macOS PATH变量
``` 
    如果用户目录下存在 .bash_profile ，比如我的/User/xxx/.bash_profile，则添加一行 
    
    export PATH="$PATH:/Users/xxx/phantomjs-2.1.1-macosx/bin"
    
    否则新建 .bash_profile,然后在添加上文
    
    在terminal中输入
    
    phantomjs --version
    
    如果可以看到版本号，则安装成功。

```
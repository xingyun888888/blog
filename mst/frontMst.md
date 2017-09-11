
- 1、有一个鼠标点击按钮事件，alert，要求在执行完页面某些操作(在点击函数之外)后，再次点击不再有反映
```
 ele.addEventListener("click",function(e){
     alert("xxx");
     //执行某些操作
     //解除绑定
     ele.removeEventListener("click")
 ,false)
```

- 2、类数组和数组的区别？常见类数组？类数组API有哪些
 ``` 
   类数组拥有length属性
   但是类数组不能像数组一样使用slice,splice,sort,reverse等数组的api,数组所具有的方法
   常见的类数组有arguments 和 querySelectAll返回值、getElementById等dom元素节点查询返回值
   
   //判断一个数组是否是类数组:
   function isArrayLike(o) {
       if (o &&                          
           typeof o === 'object'&&isFinite(o.length)&&o.length >= 0 &&o.length===Math.floor(o.length)&&o.length < 4294967296)            
           return true;                        
       else{
           return false;
       }
   类数组转换为数组:
   Array.prototype.slice.call(arrayLike)

   
 ```
- 3、页面布局的方式有哪些
 ``` 
   flex布局,grid布局,table布局(现在基本不用了),div+css布局
 ```
- 4、原型链，fn A()如何继承fn B()

```  
  es6: class A extend B{
          constructor(){
            super()
          }
       }
       
  es5: function A(){
         B.call(this)
       }     
```

5、ng特点，优势
``` 
 使用ng主要是为了减轻前端js代码量，增加js的复用。而且ng是一个很炫的框架。
 1、angular使用了传统的mvc开发模式
 2、数据绑定
 3、依赖注入
 4、模块开发
```
6、你自己常用框架有哪些
``` 
  react、Vue、jquery、angular、extjs、
```
- 1.有没有用过webpack打包工具
``` 
  webpack应该算是现在最主流,也最火热的前端文件打包工具.
  
  webpack的使用依赖于node.js , 使用之前必须安装好node 
  
  webpack主要就是用来分析你的项目结构,找到js模块 浏览器不能直接运行的拓展语言(ts,scss,less...) 将其打包为浏览器支持的语法.
  
  webpack可以使整个项目模块化，让我们可以把复杂的程序细化为小的文件
  
  webpack配置文件里面有很多插件(plugin),插件是用来拓展webpack功能的,他们会在整个构建过程中生效,执行相关的任务.
  
  webpack 配置文件里也有loaders,loaders是在打包构建过程中用来处理源文件的（JSX，Scss，Less..）一次处理一个。
  
  webpack有一个入口文件,并从这个文件中你的项目依赖的文件,进行分析处理，构建成为想要的浏览器可以识别的文件。
``` 

- 2.如何设置手机端和电脑端访问接口(如：客户访问网页时，何时展示手机版网页，何时展示pc端网页)

````
    //使用js通过UA来识别上是否为移动端页面,然后跳转到移动界面
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;//跳转至移动端的页面
            break;
        }
    }
    //否则是pc端页面
````

- 3.公司团队成员，前端及后端人数，工作模式怎样，公司用的后端语言是什么？前后端如何协调工作
 
``` 
  根据项目的大小划分人数,前后端人数一样多
  现在主流的后端开发语言:java、php、nodejs、python、ruby
  现在主流的开发模式都是前后分离开发,这样可以前后端进行接口制定后并行开发，后端负责接 口文档(小公司可能没有),待页面和接口都写完后,进行接口联调
```

- 4.cookie和storage的区别
``` 
 cookie数据始终在同源的http请求中携带，cookie在浏览器和服务器间来回传递。
 sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
 cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。
 存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。
 sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。
 sessionStorage:仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；
 localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；
 cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。
 作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；
 localStorage 在所有同源窗口中都是共享的；
 cookie也是在所有同源窗口中都是共享的。
```




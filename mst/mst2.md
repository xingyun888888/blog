
- 2、怎么存储数据，它们区别是什么？
```  
     常用的存储方式有cookie存储，storage存储(包括sessionStorage,localStorage), session存储
  首先sessionStorage、localStorage、cookie都是在浏览器端存储的数据，
  sessionStorage是在同源的同窗口（或tab）中，始终存在的数据。
  也就是说只要这个浏览器窗口没有关闭，即使刷新页面或进入同源另一页面，数据仍然存在。
  关闭窗口后，sessionStorage即被销毁。
  同时“独立”打开的不同窗口，即使是同一页面，sessionStorage对象也是不同的。
  
  
  sessionStorage 、localStorage 和 cookie 之间的区别:
   1.cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。
  而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。
   2.存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。
   3.数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。
   4.作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的.
```
- 3.页面渲染怎么实现的
  ``` 
   当浏览器获得一个html文件时，会“自上而下”加载，并在加载过程中进行解析渲染。
   解析:
   1.浏览器会将HTML解析成一个DOM树，DOM 树的构建过程是一个深度遍历过程：当前节点的所有子节点都构建好后才会去构建当前节点的下一个兄弟节点。 
   2.将CSS解析成 CSS Rule Tree 。 
   3.根据DOM树和CSSOM来构造 Rendering Tree。
   4.有了Render Tree，浏览器已经能知道网页中有哪些节点、各个节点的CSS定义以及他们的从属关系。下一步操作称之为Layout，顾名思义就是计算出每个节点在屏幕中的位置。 
   5.再下一步就是绘制，即遍历render树，并使用UI后端层绘制每个节点。
   
   
   加载过程中遇到外部css文件，浏览器另外发出一个请求，来获取css文件。
   遇到图片资源，浏览器也会另外发出一个请求，来获取图片资源。这是异步请求，并不会影响html文档进行加载，
   但是当文档加载过程中遇到js文件，html文档会挂起渲染（加载解析渲染同步）的线程，
   不仅要等待文档中js文件加载完毕，还要等待解析执行完毕，才可以恢复html文档的渲染线程。
  ```
  [具体参考文档](http://www.jianshu.com/p/e141d1543143) 

  
- 4.ajax工作原理
  [具体参考文档](http://www.cnblogs.com/SanMaoSpace/archive/2013/06/15/3137180.html)
 ``` 
   Ajax的核心是JavaScript对象XmlHttpRequest。简而言之，XmlHttpRequest使您可以使用JavaScript向服务器提出请求并处理响应，而不阻塞用户。
 ```
 
- 5.动态创建dom的方式，你怎么理解dom的

``` 
 dom(文档对象模型) 是document Object modal的缩写
 
 浏览器显示的内容其实都是属于DOM节点树的，在浏览器看来，DOM节点树才是文档
 
 动态创建标记不是在创建标记，而是在改变DOM节点树。
 
 在DOM看来，一个文档就是一颗节点树。如果你想要从节点数上添加内容，就必须插入新的节点。如果你想添加一些标记到文档，就必须插入元素节点

 具体步骤有两个顺序的方法(取其一):
 1.先创建标签，然后把标签追加到节点树种，再创建内容，把内容追加到标签后面
 2.先创建标签，在创建内容，把内容追加到标签里面，然后把标签再追加到节点树中
 
 用到以下的dom方法:
 
 document.createElement("标签名")
 
 document.createTextNode("内容")
 
 parent.appendChild(child)
 
```
- 6.浏览器兼容问题怎么解决 [具体参考文档](http://www.jianshu.com/p/fee1c713c38e)
 ``` 
    1.为什么会产生兼容性问题?
    
    就是浏览器厂商各自的技术标准和实现，对w3c标准执行的不一样之类的，浏览器先一步实现了未成型的标准和自己定义了一些标准之类的。
    
    2.怎么处理兼容性问题？
    通过各种判断和hack和优雅降级
       
    常见的css兼容:通过加浏览器前缀解决
    js兼容通过判断浏览器内核,针对每一个浏览器进行实现、    
 ```

### 简历中的面试题

[面试题1](http://www.haorooms.com/post/qianduan_mianshi)
[面试题2](http://www.cnblogs.com/haoyijing/p/5789348.html)

- 1.你项目中使用过vue吗？对vue了解吗？

```
 vue主要特点就是官网所介绍的那样:
    简洁优雅、轻量、快速、数据驱动、模块友好、组件化
 vue数据绑定的原理?
     数据劫持: vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

  声明周期函数?
   beforecreated：el和data 并未初始化
   created:完成了 data数据的初始化，el没有
   beforeMount：完成了 el 和 data 初始化
   mounted ：完成挂载
   updated: 实例属性更新
```

- 2.ajax的原理

```
 Ajax的原理简单来说是在用户和服务器之间加了一个中间层(AJAX引擎)，通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用javascript来操作DOM而更新页面。使用户操作与服务器响应异步化。

 简单的说，也就是javascript可以及时向服务器提出请求和处理响应，而不阻塞用户。达到无刷新的效果。

 ajax过程
 获得ajax
 打开地址
 发送数据
 接收数据

```

- 3.看你简历上面有写到canvas,你认为canvas有哪些特点跟svg有什么区别？

```
   这个老师应该有讲过，我在整理一下,大概挑一两条说一下就行了
   svg:
       SVG是一种使用XML描述2D图形的语言
       SVG基于XML, 这意味着SVG DOM中的每个元素都是可用的. 所以可以为每个元素附加JavaScript事件处理器
       在SVG中, 每个被绘制的图像均被视为对象. 如果SVG对象的属性发生变化, 那么浏览器能够自动重现图像
       Canvas
       Canvas通过js来绘制2D图形
       Canvas是逐像素进行渲染的
       在Canvas中, 一旦图形被绘制完成, 它就不会继续得到浏览器的关注. 如果其位置发生变化, 那么整个场景也需要重新绘制, 包括任何或许已被图形覆盖的对象.
   区别
       Canvas支持分辨率, SVG不支持
       Canvas不支持事件处理器, SVG支持
       Canvas只有弱的文本渲染能力, 而SVG最适合带有大型渲染区域的应用程序(比如谷歌地图)
       Canvas能够以.png或.jpg格式保存结果图像
       SVG的复杂度过高的话会减慢渲染速度(任何过度使用DOM的应用都不快)
       Canvas最适合图像密集型的游戏, 其中的许多对象会被频繁重绘. 而SVG不适合游戏应用
       Canvas是基于位图的图像,它不能够改变大小, 只能缩放显示; SVG是基于矢量的, 所以它能够很好地处理图形大小的改变　　　　
       Canvas提供的功能更原始, 适合像素处理, 动态渲染和大数据量绘制; SVG功能更完善, 适合静态图片显示, 高保真文档查看和打印的应用场景
       绘制Canvas对象后, 不能使用脚本和CSS对它进行修改; 而SVG对象是文档对象模型的一部分, 所以可以随时使用脚本和CSS修改它们

```

- 4.有了解过es6吗,有哪些新特性?

[参考文档](http://es6.ruanyifeng.com/)

```
 es6新特性：
   箭头操作符 ，引入了class关键字(其实就是对es5原型模式的包装)
   字符串模板，对象数组解构赋值，展开运算符等等...没说完
```

- 5.js冒泡和捕获的区别?

[参考文档](http://www.jb51.net/article/42492.htm)

```
冒泡型事件：事件按照从最特定的事件目标到最不特定的事件目标(document对象)的顺序触发。

捕获型事件：事件从最不精确的对象(document 对象)开始触发，然后到最精确的对象。

DOM事件流：同时支持两种事件模型：捕获型事件和冒泡型事件，但是，捕获型事件先发生。两种事件流会触及DOM中的所有对象，从document对象开始，也在document对象结束。

```

- 6.输入url后的加载过程

```
 域名解析过程(包括dns查询过程，dns缓存查找首先在浏览器缓存、系统缓存、路由器缓存)
 建立连接(tcp三次握手)
 构建网页(服务器收到请求后，根据http请求中的内容决定返回相应的html文件,在执行过程中，根据需要，会继续请求图片、css、js等资源)
 渲染过程:
     HTML代码转化为DOM树
     CSS代码转化成CSS对象模型
     结合DOM和CSSOM，生成一棵渲染树(Render Tree)
     生成布局,将所有渲染树的所有节点进行平面合成
     将布局绘制在屏幕上
```

- 7.有了解过React.js吗？

```
  React.js 只是一个视图库
  有以下特点:
       （1）声明式设计

   　　（2）高效：通过对DOM的模拟，最大限度的减少与DOM的交互。

   　　（3）灵活：可以与已知的框架或库很好的配合。

   　　（4）JSX：是js语法的扩展,建议用。

   　　（5）组件：构建组件，使代码更容易得到复用，能够很好地应用在大项目的开发中。

   　　（6）单向响应的数据流：React实现了单向响应的数据流，从而减少了重复代码

如何管理组件通信?
 通过组件的props属性

如何更新视图?
  通过state驱动视图比较差异(diff算法)最后进行更新操作
  具体方法有setState(),forceUpdate(不建议使用)

声明周期函数以及执行顺序是怎样的?
 初始化阶段:
    getDefaultProps:获取实例的默认属性
    getInitialState:获取每个实例的初始化状态
    componentWillMount：组件即将被装载、渲染到页面上（render之前最好一次修改状态的机会）
    render:组件在这里生成虚拟的DOM节点（只能访问this.props和this.state；只有一个顶层组件，也就是说render返回值值只能是一个组件；不允许修改状态和DOM输出）
    componentDidMount:组件真正在被装载之后，可以修改DOM
 运行中状态:
  　componentWillReceiveProps:组件将要接收到属性的时候调用(在父组件修改真正发生之前,可以修改属性和状态）
    shouldComponentUpdate:组件接受到新属性或者新状态的时候（可以返回false，接收数据后不更新，阻止render调用，后面的函数不会被继续执行了）
    componentWillUpdate:不能修改属性和状态
    render:只能访问this.props和this.state；只有一个顶层组件，也就是说render返回值只能是一个组件；不允许修改状态和DOM输出
    componentDidUpdate:可以修改DOM
销毁阶段：
    componentWillUnmount:开发者需要来销毁（组件真正删除之前调用，比如计时器和事件监听器）
```

- 8.你有碰到哪些兼容性问题?

[参考文档](http://www.jianshu.com/p/55dfe7017b05)

```
  随便说两个,找一个js的和一个css的
```

- 9.对nodejs有了解吗?nodejs在你们项目哪里有用到?

```
  nodejs单线程，基于事件模型，非阻塞IO，服务端javascript。
  极大提高web服务的并发性
  nodejs在我们的项目中用来做中间层服务器,负责处理转发静态页面和代理请求服务端数据
  常用的框架和库:express,koa

```
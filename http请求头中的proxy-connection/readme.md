### http请求头中的Proxy-Connection

 - proxy-connection是什么???
 
   代理改变了什么？
   
   为了彻底弄清这个问题，我们先来看下设置浏览器代理之后，HTTP 请求头有那些变化。下面分别是设置代理前后访问同一 URL 的请求头：
   
   ```
      GET / HTTP/1.1
      Host: www.example.com
      Connection: keep-alive
       
      GET http://www.example.com/ HTTP/1.1
      Host: www.example.com
      Proxy-Connection: keep-alive
  
   ```
   设置代理之后，浏览器连接的是代理服务器，不再是目标服务器，这个变化单纯从请求头中无法看出。
   请求头中的变化有两点：第一行中的 request-URL 变成了完整路径；Connection 请求头被替换成了 Proxy-Connection。我们分别来看这两个变化。
  
   #### 为什么需要完整路径？
   
   `早期的 HTTP 设计中，浏览器直接与单个服务器进行对话，不存在虚拟主机。单个服务器总是知道自己的主机名和对应端口，为了避免冗余，浏览器只需要发送主机名之外的那部分 URI 就行了。代理出现之后，部分 URI 彻底杯具，代理服务器无法得知用户想要访问的URI在什么主机上。为此，HTTP/1.0 要求浏览器为代理请求发送完整的 URI，也就是说规范告诉浏览器的实现者必须这么做。  
   显式地给浏览器配置代理后，浏览器会为之后的请求使用完整 URI，解决了代理无法定位资源的问题。但是代理可以出现在连接的任何位置，很多代理对浏览器来说不可见，如反向代理或路由器代理。所以实际上，几乎所有的浏览器都会为每个请求加上内容为主机名的 HOST 请求头，来彻底解决虚拟主机问题。对于 HTTP/1.1 请求，HOST 请求头必须存在，否则会收到 400 错误；对于 HTTP/1.0 请求，如果连接的是代理服务器，使用相对 URI，并且没有 HOST 请求头，会发生错误`
   
  #### Proxy-Connection 是什么？
   HTTP 中的 Connection，用来对 HTTP 连接进行说明，多个说明使用英文逗号隔开，如
   ```
     GET / HTTP/1.1
     Host: www.example.com
     Connection: my-header, close, my-connection
     My-Header: xxx
   ```
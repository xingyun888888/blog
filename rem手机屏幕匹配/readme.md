---
rem 作为一个低调的长度单位，由于手机端网页的兴起，在屏幕适配中得到重用。使用 rem 前端开发者可以很方便的在各种屏幕尺寸下，通过等比缩放的方式达到设计图要求的效果。

rem 的官方定义『The font size of the root element.』，即以根节点的字体大小作为基准值进行长度计算。一般认为网页中的根节点是 html 元素，所以采用的方式也是通过设置 html 元素的 font-size 来做屏幕适配，但实际情况真有这么简单吗？

首先我们来看看使用 rem 实现手机屏幕适配的常用方案。

以设计稿的宽度为640px，即：designWidth = 640，同时设定在640px屏宽下 1rem=100px ，即：rem2px = 100。

设置 1rem=100px 的优点不言而喻。前端开发者在切图、重构页面的时候，通过直接位移小数点的方式，就可以将UI图中测量到的 px 值换算成对应的 rem 值，方便快捷。

此外，在 head 中我们还设置了：<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
viewport 的作用很重要，但不是本文的重点所以不展开，有兴趣的同学可以自行搜索。

先来看看具体方案：

下面四个方案来自同事共享，原理都是采用等比缩放的方式 —— 获得目标屏幕宽度和设计稿宽度的比，作为 rem 的基值（缩放系数），设置为html标签的字体大小。不同的只是在于性能取舍和书写习惯。

---

> 先来看看具体方案： 
  下面四个方案来自同事共享，原理都是采用等比缩放的方式 —— 获得目标屏幕宽度和设计稿宽度的比，作为 rem 的基值（缩放系数），设置为html标签的字体大小。不同的只是在于性能取舍和书写习惯。

```
 方案1
 
 @media screen and (min-width: 320px) {html{font-size:50px;}}
 @media screen and (min-width: 360px) {html{font-size:56.25px;}}
 @media screen and (min-width: 375px) {html{font-size:58.59375px;}}
 @media screen and (min-width: 400px) {html{font-size:62.5px;}}
 @media screen and (min-width: 414px) {html{font-size:64.6875px;}}
 @media screen and (min-width: 440px) {html{font-size:68.75px;}}
 @media screen and (min-width: 480px) {html{font-size:75px;}}
 @media screen and (min-width: 520px) {html{font-size:81.25px;}}
 @media screen and (min-width: 560px) {html{font-size:87.5px;}}
 @media screen and (min-width: 600px) {html{font-size:93.75px;}}
 @media screen and (min-width: 640px) {html{font-size:100px;}}
 @media screen and (min-width: 680px) {html{font-size:106.25px;}}
 @media screen and (min-width: 720px) {html{font-size:112.5px;}}
 @media screen and (min-width: 760px) {html{font-size:118.75px;}}
 @media screen and (min-width: 800px) {html{font-size:125px;}}
 @media screen and (min-width: 960px) {html{font-size:150px;}}

```

``` 
  方案2
  
  @media screen and (min-width: 320px) {html{font-size:312.5%;}}
  @media screen and (min-width: 360px) {html{font-size:351.5625%;}}
  @media screen and (min-width: 375px) {html{font-size:366.211%;}}
  @media screen and (min-width: 400px) {html{font-size:390.625%;}}
  @media screen and (min-width: 414px) {html{font-size:404.2969%;}}
  @media screen and (min-width: 440px) {html{font-size:429.6875%;}}
  @media screen and (min-width: 480px) {html{font-size:468.75%;}}
  @media screen and (min-width: 520px) {html{font-size:507.8125%;}}
  @media screen and (min-width: 560px) {html{font-size:546.875%;}}
  @media screen and (min-width: 600px) {html{font-size:585.9375%;}}
  @media screen and (min-width: 640px) {html{font-size:625%;}}
  @media screen and (min-width: 680px) {html{font-size:664.0625%;}}
  @media screen and (min-width: 720px) {html{font-size:703.125%;}}
  @media screen and (min-width: 760px) {html{font-size:742.1875%;}}
  @media screen and (min-width: 800px) {html{font-size:781.25%;}}
  @media screen and (min-width: 960px) {html{font-size:937.5%;}}
```

``` 
 方案3
 
 var designWidth = 640, rem2px = 100;
 document.documentElement.style.fontSize =
   ((window.innerWidth / designWidth) * rem2px) + 'px';
   
```

```  
方案4
var designWidth = 640, rem2px = 100;
document.documentElement.style.fontSize =
  ((((window.innerWidth / designWidth) * rem2px) / 16) * 100) + '%';
```


>终极解决方案

```  
  function adapt(designWidth, rem2px){
    var d = window.document.createElement('div');
    d.style.width = '1rem';
    d.style.display = "none";
    var head = window.document.getElementsByTagName('head')[0];
    head.appendChild(d);
    var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
    d.remove();
    document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
    var st = document.createElement('style');
    var portrait = "@media screen and (min-width: "+window.innerWidth+"px) {html{font-size:"+((window.innerWidth/(designWidth/rem2px)/defaultFontSize)*100) +"%;}}";
    var landscape = "@media screen and (min-width: "+window.innerHeight+"px) {html{font-size:"+((window.innerHeight/(designWidth/rem2px)/defaultFontSize)*100) +"%;}}"
    st.innerHTML = portrait + landscape;
    head.appendChild(st);
    return defaultFontSize
  };
  var defaultFontSize = adapt(640, 100);
```
##### 我们在移动项目时，经常会遇到屏幕尺寸适配的问题?那么如何解决呢?

>需要移动端适配的根本原因:屏幕窗口的大小,devicepixelratio值等

``` 
 简单介绍下devicepixelratio(设备像素比,即dpr) = physicalpixel(物理像素)
  /density-independent pixel(设备独立像素,即dip)。
 
 在JavaScript中，可以通过window.devicePixelRatio获取到当前设备的dpr。而在CSS中，
  可以通过-webkit-device-pixel-ratio，-webkit-min-device-pixel-ratio
  和 -webkit-max-device-pixel-ratio进行媒体查询，
  对不同dpr的设备，做一些样式适配(这里只针对webkit内核的浏览器和webview)。
 
 dip或dp,（device independent pixels，设备独立像素）与屏幕密度有关。
 dip可以用来辅助区分视网膜设备还是非视网膜设备。
 
 移动端适配主要有两大不同的方向：响应式布局和自适应布局。
 
 响应式布局是根据屏幕大小自动的调整布局位置（非单纯的缩放），实现适配
 
 自适应布局则是根据屏幕大小自动的缩放大小，实现适配。个人喜欢自适应布局的这种方式。
 
```


- 1.纯css实现方式  --- 媒体查询

``` 
  //less版本
  html {
      font-size: 20px;
  }
  @media only screen and (min-width: 401px) {
      html {
          font-size: 25px !important;
      }
  }
  @media only screen and (min-width: 428px) {
      html {
          font-size: 26.75px !important;
      }
  }
  @media only screen and (min-width: 481px) {
      html {
          font-size: 30px !important;
      }
  }
  @media only screen and (min-width: 569px) {
      html {
          font-size: 35px !important;
      }
  }
  @media only screen and (min-width: 641px) {
      html {
          font-size: 40px !important;
      }
  }
  @media only screen and (min-width: 751px) {
      html {
          font-size: 50px !important;
      }
  }
  @media only screen and (min-width: 1080px) {
      html {
          font-size: 60px !important;
      }
  }
```

- 2.js的实现方式

  >js的实现方式，参考了网易和淘宝的实现方式，对他们进行了整合。并且修复了手机端1px问题。
 -  `网易实现方式是通过设备尺寸动态的设置DOM的根元素字体大小，没有考虑devicePixelRatio的因素;`
 -  `淘宝实现方式也是通过设备尺寸动态的设置DOM的根元素字体大小，并且考虑了devicePixelRatio的因素，但淘宝在设置rem时，显得较复杂(不方便写css把px转化成rem);`
 
 - `1px问题简单点说就是因为devicePixelRatio的存在，css的1px不等于移动端的1px。
`

``` 
(function(doc, win, designSize) { //designSize为设计稿的尺寸(宽)

    var docEl = document.documentElement,
        devWidth = docEl.clientWidth > 1080 ? 1080 : docEl.clientWidth,
        dpr = devicePixelRatio || 1,
        scale = 1 / dpr,
        width = dpr * devWidth,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'onresize', //判断横屏和窗口重置
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            document.querySelector('meta[name="viewport"]')
                    .setAttribute('content','width=' + width +
                                ', initial-scale=' + scale +
                                ', maximum-scale=' + scale +
                                ', minimum-scale=' + scale +
                                ', user-scalable=no');
            docEl.style.fontSize = devWidth / (designSize / 100) * dpr + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

})(document, window, 750);

```
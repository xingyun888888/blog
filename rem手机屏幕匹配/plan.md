### 移动适配方案

[参考链接](http://div.io/topic/1092)

>在pc端页面经常会遇到浏览器兼容的问题.移动端遇到最多的算是适配问题!
 
 
#### 目前移动端适配常用的集中方法:

- 固定高度,宽度自适应,

```
是使用最多的方法, 垂直方向使用固定的高度值, 水平方向使用百分比,定值、flex等

随着屏幕的变化，页面变化 效果跟pc端的响应式类似。 

原理：
<meta name = "viewport" content="width=device-width,initial-scale=1"/>

这样设置之后就可以了  
```

- 固定宽度,viewport缩放
``` 
  设计图、页面宽度、viewport width使用一个宽度,浏览器自动完成缩放 单位使用px就可以
  
  
  原理：
  根据屏幕的尺寸动态生成viewport ， 
<meta name="viewport" content="width=640,initial-scale=0.5,maxinum-scale=0.5,minimum-scale=0.5,user-scalable=none"/> 

宽度640是根据设计图定下的, 0.5是根据屏幕的宽度动态生成的
生成的viewport告诉浏览器网页的布局视口使用640px,然后把页面缩放50%

```

- rem做宽度,viewport缩放

``` 
  使用淘宝的方案，根据屏幕宽度需要动态设定rem值,需要适配的元素都使用rem 为单位,不需要适配的元素还是使用px为单位。
  
  具体使用方法见使用Flexible实现手淘H5页面的终端适配  
  原理:
  1.动态生成viewport
  2.屏幕宽度设置rem的大小, 给html设置font-size;
  3.根据设备像素比  给html设置data-dpr
```
##### 经常会遇到图片长按出现弹出菜单 这样体验很不好，那么如何取消掉呢
 ```  
   css统一加上
   -webkit-user-select:none;
   -webkit-touch-callout:none;
   用户点击对象长按就没响应了  
   给对应的元素绑定时间touch  "return false" | "e.preventDefault()";

 ```
 
 
 - -webkit-overflow-scrolling  ios上出现白色区域怎么解决
 
 ``` 
   overflow:auto;
   display:flex;
   flex-direction:column;
   max-height:80vh;
   border-radius:8px;
   -webkit-overflow-scrolling:touch;
   overflow-scrolling:touch;
   
   &>*{
      transform:transformZ(0);
      transform:translateZ(0);
   }
   
 ```
### iterator接口 

  - for ... in
  - for ... of
  
   `两者都是用来遍历对象和数组，某些情况下for...in循环会以任意顺序遍历键名，
    for...of直接遍历的数组的值，而非数组的下标`
    

### 迭代器模式
    
  >迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。
   书中演示了一个文件上传的例子，情景是：在不同的浏览器环境下，选择的上传方式是不一样的。所以我们会优先使用控件上传。如果浏览器没有安装上传控件，则使用Flash上传，如果连Flash也没安装，那就只好使用浏览器原生的表单上传了。 

 - 以下就是迭代器模式的demo
   
 ```
   let getUploadObj = {
       getActiveUploadObj (){
           try {
               return new ActiveXObject('TXFTNActiveX.FTNUpload');   // IE上传控件
           } catch (e) {
               return false;
           }
       },
       getFalshUploadObj () {  
           try {
               new ActiveXObject('ShockwaveFlash.ShockwaveFlash');   // Flash上传控件
          let str = '<object type="application/x-shockwave-flash"></object>';
               return $(str).appendTo($('body'));
           } catch (e) {
               return false;
           }
       },
       getFormUploadObj () {
           let str = '<input name="file" type="file" calss="ui-file"/>';   // 表单上传
           return $(str).appendTo($('body'));
       }
   } 
   //给对象getUploadObj定义iterator接口，上面演示过这段代码
   //这里可以通过工厂模式，抽象成一个专门给对象安装iterator接口的函数，这样就可以省却很多重复代码了。
   Object.defineProperty(getUploadObj, Symbol.iterator, {
       enumerable: false,
       writable: false,
       configurable: true,
       value: function(){
           var o = this;
           var idx = 0;
           var ks = Object.keys(o);
           return {
               next: function(){
                   return {
                       value: o[ks[idx++]],
                       done: (idx > ks.length)
                   }
               }
           }
       }
   });
   
   
   function iteratorUploadObj (uploadObj){
       // 直接使用`for...of`遍历uploadObj对象
       for(let getUpload of uploadObj){
           let uploadObj = getUpload();
           if(uploadObj) return uploadObj;
       }
   }  
   let uploadObj = iteratorUploadObj(getUploadObj);
   console.log(uploadObj);  // [input, prevObject: Z.fn.init[1], context: undefined]   
```  
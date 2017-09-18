### 

```` 
   有这么一个对象 obj = {a:{b:{c:{d:{e:{}}}}}};
   写一个函数 传入一个key值,得到它的上一层的key值;如:传入e,得到d;

````

``` 
  function getParentKey(obj,key,children){
     for(var i in obj){
        children = obj[i];
        if(i == key){
          
        }
     }
    
  }

```
### DOM元素尺寸offsetWidth,scrollWidth,clientWidth等详解 


#### 1. offsetWidth

   `offsetWidth=border+padding+height;`
   
   
#### 2.clientWidth   
  
  `clientWidth=padding+height-滚动条 ` 
  
#### 3.scrollWidth  

  `scrollWidth=padding+包含内容的完全高度`
  
#### 4.scrollTop(定义：获取位于元素顶部边界与元素中当前可见内容的最顶端之间的距离 )  
  `scrollTop=scrollHeight-clientHeight 
   =padding+包含内容的完全高度-(padding+height-滚动条) 
   =包含内容的完全高度-height-滚动条`
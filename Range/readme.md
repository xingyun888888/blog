### Range 及其使用
  
  `Range是html中的任意一段内容(fragment),可以让你来得到html中任意一部分`
  
  
  #### 1.获取range对象
  
   ---
     //从selection获取range
     var selection  = window.getSelection()     
     var range  = selection.getRangeAt(0);
     //创建range
     var range = document.createRange();     
   ---

  #### 2.设置range范围
  
  
   ---
     // 设置起止位置 另外还有setStartBefore/setStartAfter和setEndBefore/setEndAfter
     range.setStart(startContainer, startOffset);
     range.setEnd(EndContainer, endOffset);
     // 设置边界为referenceNode的起止位置（包含referenceNode）
     range.selectNode(referenceNode);
     // 设置边界为referenceNode的起止位置（不包含referenceNode）
     range.selectNodeContents(referenceNode);
     // 将边界进行折叠 toStart参数表示是否向前（起始边界）折叠
     range.collapse(toStart);   
   ---
  #### 3.处理range内容(获取、删除、插入)
  
   ---
     // 抽取html内容为fragment-将从页面中移除该范围内的片段
     range.extractContents();
     // 获取文本内容
     range.toString()
     // 删除内容
     range.deleteContents();
     // 在range起始位置插入一个node
     var textNode = document.createTextNode('new node');
     range.insertNode(textNode); 
   ---
   
   
###
  `
    var html = "我叫{{name}},今年{{age}}岁"
    var data = {name:"小明",age:15}
    render(html,data) //我叫小明,今年15岁 //写一个render函数替换
  `
   >实现代码如下:
   
   ```
    var html = "我叫{{name}},今年{{age}}岁"
    var data = {name:"小明",age:15}
    str.replace(/\{\{(.*?)\}\}/g,function($1,$2){
       if(data[$2]){
         return data[$2];
       }     
    })
   ```
  
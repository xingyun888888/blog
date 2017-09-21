
- 1.谈谈原生js的dom操作

``` 
  dom操作主要分为增删改查...  
  1.创建节点:
      var createNode = document.createElement("div");
      var createTextNode = document.createTextNode("hello world");
      createNode.appendChild(createTextNode);
      document.body.appendChild(createNode);
      document.documentElement.appendChild(createNode);
  2.插入节点:
       var createNode = document.createElement("div");
       var createTextNode = document.createTextNode("hello world");
       createNode.appendChild(createTextNode);
       var div1 = document.getElementById("div1");
       document.body.insertBefore(createNode,div1); 
  3.替换和删除元素
   var replaceChild = document.body.replaceChild(createNode,div1);
   var removeChild = document.body.removeChild(div1);
```

- 谈谈对json和jsonp的理解

``` 
    简单说，JSON是一种基于文本的数据交换方式，或者叫做数据描述格式
    优点:Javascript原生支持，后台语言几乎全部支持,可读性较强,易于编写和解析   
    jsonp(json with padding)是一种用来解决跨域的手段,返回的是脚本代码
    (包含一个函数调用); 
```

- 假如做一个登陆功能，前端要传什么参数，服务器端返回什么

```  
  前端post传给服务端用户名密码 以及验证码 
  后端返回登录是否成功信息,返回前端页面所需要的用户详细信息
```

- Php端的借口是什么样的

```  
  根据前后端开发习惯
  php返回给前端的接口一般包含3部分：
  1.data 返回数据内容
  2.message  成功或者失败状态信息
  3.stateCode  状态码
```

- 如何通过Ajax与后段交互

``` 
  get请求: 
    //步骤一:创建异步对象
    var ajax = new XMLHttpRequest();
    //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
    ajax.open('get','getStar.php?starName='+name);
    //步骤三:发送请求
    ajax.send();
    //步骤四:注册事件 onreadystatechange 状态改变就会调用
    ajax.onreadystatechange = function () {
       if (ajax.readyState==4 &&ajax.status==200) {
        //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
    　　　　console.log(xml.responseText);//输入相应的内容
      　　}
    }
  post请求:
    //创建异步对象  
    var xhr = new XMLHttpRequest();
    //设置请求的类型及url
    //post请求一定要添加请求头才行不然会报错
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
     xhr.open('post', '02.post.php' );
    //发送请求
    xhr.send('name=fox&age=18');
    xhr.onreadystatechange = function () {
        // 这步为判断服务器是否正确响应
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
      } 
    };
   
  jquery的ajax的几种方式
       1.   $.post(url,params,callback); 
       2.   $.getJSON(url,params,callback); 
       3.   $.ajax(); 
       4.   $.load(url,params,callback); 
  
    $.ajax({
       url: url,//地址
       data: data,//参数
       type: 'POST',//提交方式 可以选择post/get 推荐post 
       async: false,//同步异步 
       dataType: 'json',//返回数据类型 
       success:function(data){
           accidentList = data.list;
          //这里可以直接取data里面的数据了，因为设置返回值为json方式。               
       }
    });
```

- 对EasyUI的了解

```  
  easyui是一种基于jquery用户界面插件集合
  封装了很多常用的功能组件  
  自学一两个星期就可以上手
```
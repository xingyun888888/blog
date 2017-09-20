- 1.ng中如何配置路由，$scope和$rootscope的原理

```
 ng中如何配置路由?

 1)使用内置路由模块ng-route
       var app = angular.module('ngRouteExample', ['ngRoute'])
        .controller('MainController', function($scope) {
        })
        .config(function($routeProvider, $locationProvider) {
          $routeProvider
              .when('/users', {
                  templateUrl: 'user-list.html',
                  controller: 'UserListCtrl'
              })
              .when('/users/:username', {
                  templateUrl: 'user.html',
                  controller: 'UserCtrl'
              });
    
            // configure html5
            $locationProvider.html5Mode(true);
        });
 2)第三方路由模块ui-route
 
    $stateProvider
        .state('contacts', {
            url: '/contacts',
            template: 'contacts.html',
            controller: 'ContactCtrl'
        })
        .state('contacts.detail', {
            url: "/contacts/:contactId",
            templateUrl: 'contacts.detail.html',
            controller: function ($stateParams) {
                // If we got here from a url of /contacts/42
                $stateParams.contactId === "42";
            }
        });

 scope是angularJS中的作用域(其实就是存储数据的地方)，
 很类似javascript的原型链。搜索的时候，优先找自己的scope，
 如果没有找到就沿着作用域链向上搜索，直至到达根作用域rootScope。
 
 $rootScope是由angularJS加载模块的时候自动创建的，
 每个模块只会有1个rootScope。rootScope创建好会以服务的形式加入到$injector中。
 也就是说通过$injector.get("$rootScope");能够获取到某个模块的根作用域。
 更准确的来说，$rootScope是由angularJS的核心模块ng创建的。
```

- 2.在ng 中的常用指令，服务注入的方式

```
   ng中常用的指令有：ng-class、ng-if、ng-show、ng-repeat、ng-style、ng-href
   、ng-src  还有一系列时间绑定的指令ng-click等等...
   
   1.内联式注入(最基本的方式)
      //最基本的依赖注入方式  
        var MyModule = angular.module("MyModule",[]);  
        MyModule.controller('MyCtrl',['$scope',  
            function($scope){             //可以修改参数，如$scope1,但下面必须同时改  
              $scope.gameName = "海哥帅！"  
            }  
        ]);  
   2.推断型注入
        //推断型注入方式:函数参数的名称必须要和被注入的对象相同  
        var MyModule = angular.module("MyModule",[]);  
          
        var MyCtrl = function($scope){  
            $scope.gameName = "海哥帅！";  
        }  
          
        MyModule.controller('MyCtrl',MyCtrl);  
   3.声明式注入
        //声明式注入  
        var MyModule = angular.module("MyModule",[]);  
          
        var MyCtrl = function(thisISMyName){//参数名称可以随意变化  
            thisISMyName.gameName = "weddy！";  
        }  
        MyCtrl.$inject = ['$scope'];//加载模块  
        MyModule.controller('MyCtrl',MyCtrl);  
        
```

- 3.ng中发起请求的内置服务是什么，原理是怎样的？

```
  ng中发起请求的内置服务是$http
  
  $http服务只是简单的封装了浏览器原生的XMLHttpRequest对象。
  ，接收一个参数，这个参数是一个对象，包含了用来生成HTTP请求的配置内容，
  这个函数返回一个promise对象，具有success和error方法。
 
     var promise = $http({
        method:"post",        　　// 可以是get,post,put, delete,head,jsonp;常使用的是get,post
        url:"./data.json", 　　   //请求路径
        params:{'name':'lisa'},  //传递参数，字符串map或对象，转化成？name=lisa形式跟在请求路径后面
        data:blob, 　　　　　　　　//通常在发送post请求时使用，发送二进制数据，用blob对象。
        }).success(function(data){
        //响应成功操作
        }).error(function(data){
        //响应失败（响应以错误状态返回）操作
     })
     
     可以使用then()函数来处理$http服务的回调，
     then()函数接受两个可选的函数作为参数，表示success或error状态时的处理
     
    then()函数接收的resp（响应对象）包含5个属性：　

    1. data（字符串或对象）：响应体
    2. status:相应http的状态码,如200
    3. headers(函数)：头信息的getter函数，可以接受一个参数，用来获取对应名字的值
    4. config(对象)：生成原始请求的完整设置对象
    5. statusText:相应的http状态文本，如"ok"
```

[有关更多angular面试题请参考](http://blog.csdn.net/ww430430/article/details/56480576)

- 4.用CSS 实现两个div 交叉层叠的方式有哪几种？

```
 绝对定位absolute，浮动定位float，固定定位fixed，也可以使用3d转换属性transform;
```

- 5.向一个标签插入内容的方式

```
常用的两种方法:
  innerHTML()方法
  appendChild()方法
```

- 6.如何在一个数组后压入一个数

```
  arr[length]=数字
  arr.push(数字)
```

- 7.Ajax 如何实现多线程请求数据，请求返回的是什么类型的数据

```
  由于js是单线程 所以ajax不能实现多线程请求数据
  
  如果想使用多线程，可以使用webworker
  
  请求返回的数据格式有xml或者json格式或者Text/HTML格式 
```

- 8.如何处理页面缓存问题？

```
方法1：GET请求URL后加随机数，让服务器认为是不同的请求，
如："http://www.example.com/index.jsp?class=articele&page=5&t"+newDate().getTime();
方法2：在ajax发送请求前加上xmlHttpRequest.setRequestHeader("If-modified-since","0");
方法3：在ajax发送请求前加上xmlHttpRequest.setRequestHeader("Cache-Control","no-cache");
方法4：若为jquery ajax, 设置ajax属性cache:false;(注意：cache属性对post没有用，对get才有用)
方法5：在服务器端响应请求时加上response.setHeader("Cache-Control","no-cache,must-revalidate");
方法6：使用POST代替GET,浏览器不会对POST做缓存

```


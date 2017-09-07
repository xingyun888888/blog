#####  如何用js实现贪吃蛇

用自己学过的js知识来实现贪吃蛇游戏 

首先就是贪吃蛇的游戏规则(不用说了,大家都玩过)

如何实现呢？

 >1.可以用html+css的方式来实现(样式需要多些一点)
  2.用canvas画布的方式(这个看起来高大上,好就用这个)
 
 
`编程方式可以使用面向对象、面向过程的方式(我这里选择的面向过程的方式,后面可以改成面向对象的方式)`


首先全局定义几个方法中需用到的变量

- width = 15;   //这个是代表每个格子的宽度

- snakeCount = 6;  //这个是表示蛇身体的长度(初始值是6可以修改)
 
- snake = []    //存储蛇当前的位置坐标

- foodX foodY   //用来表示食物的坐标 

- toGo  //保存当前移动的方向

#### 需要实现以下几个方法:

 1.绘制的方法(包含绘制背景地图,绘制蛇当前的位置,食物的位置)
``` 
  function drawRect(){
       //选用450*450正方形格子进行绘制(因为定义每个格子是大小是15*15 所以需要绘制30个格子)
        for(var i=0;i<30;i++){
            ctx.strokeStyle="#000000";
            ctx.beginPath();//开始路径
  
            //起点
            ctx.moveTo(i*15,0);
            //终点
            ctx.lineTo(i*15,450);
  
            //起点
            ctx.moveTo(0,i*15);//移动到指定点
            //终点
            ctx.lineTo(450,i*15);//从当前的点到指定点画直线
  
            ctx.closePath();//结束路径
            //绘制线
            ctx.stroke();//对当前路径进行描边
        }
        //绘制蛇(循环遍历蛇当前自身的长度数值,然后取出坐标数组snake存储的每个格子的坐标值进行绘制)
        for(var i=0;i<snakeCount;i++){
            //设置矩形的填充颜色
            ctx.fillStyle = "#000";
            if(i==snakeCount-1)ctx.fillStyle = "red";			
            //绘制矩形 x,y,width,height
            ctx.fillRect(snake[i].x,snake[i].y,15,15);
        }
  
       //绘制食物(这个比较简单就一个格子 直接填充喜欢的颜色就行了)
        
        ctx.fillStyle="#66ff99";
        //绘制矩形 x,y,width,height
        ctx.fillRect(foodX,foodY,15,15);//填充一个矩形
        ctx.fill();
  
    }
```
 2.蛇移动的方法move
```  
function move(){
        //传入当前移动的方向值toGo 从全局变量获取
        //每次往数组里面压进去对应的坐标值(此时此刻脑子里必须有一个坐标系 哈哈 )
		switch(toGO){
			//向左(每移动一个格子x坐标需要-一个格子的长度15,y坐标不变)
			case 1: snake.push({x:snake[snakeCount-1].x-15,y:snake[snakeCount-1].y});
			break;
			//向上(每移动一个格子x坐标不变,y坐标-一个格子的长度15)
			case 2: snake.push({x:snake[snakeCount-1].x,y:snake[snakeCount-1].y-15});
			break;
			//向右(每移动一个格子x坐标需要+一个格子的长度15,y坐标不变)
			case 3: snake.push({x:snake[snakeCount-1].x+15,y:snake[snakeCount-1].y});
			break;
			//向下(最后一个留给你自己思考了)
			case 4: snake.push({x:snake[snakeCount-1].x,y:snake[snakeCount-1].y+15});
			break;
		}

		//删除第一个元素(往前移动一个格子之后,尾巴的格子需要删除掉(这样才能保证蛇的长度不变))
		snake.shift();
		
		
		//重新绘制(既然上面都已经计算好坐标了,剩下的事就是我们需要将上面的数据绘制出来,不然就是天方夜谭 ,绘制之前别忘了清除之前的画布，千万不要留下任何作案痕迹)
		ctx.clearRect(0,0,450,450);
		
		//每次移动之后必须检测当前位置是否合法(不合法就不让你继续游戏了)
		isDead();
		//我每次移动之后必须检测当前位置有木有星星给我吃(因为我饿了)
		isEat();
		(好了，完事具备 ，啥也别说了，最后一步开始画了,调用前面声明的方法drawRect)
		drawRect();
	}
```
  3.随机出现食物的方法
  ``` 
    function addFood(){
    		//随机坐标 向下取整
    		foodX = Math.floor(Math.random()*30)*15;
    		foodY = Math.floor(Math.random()*30)*15;
    		
    		//这里有一个坑(食物不能增加到蛇的身上,所以要判断一下,如果随机生成坐标是蛇当前自身占据的位置,必须要重新生成,不然还怎么玩...)
    		for(var i=0;i<snakeCount-1;i++){
    			if(foodX == snake[i].x && foodY == snake[i].y){
    				addFood();
    			}
    		}
    	}
  ```
  4.检测当前位置是否有食物的方法:
```  
  function isEat(){
    //如果蛇头部的坐标等于食物位置的坐标,那就不好意思,表示吃掉
  		if(snake[snakeCount-1].x==foodX&&snake[snakeCount-1].y==foodY){
  			//重新生成食物
  			addFood();
  			//蛇长度加1
  			snakeCount++;
  			//往数组添加一个元素
  			snake.unshift({x:-15,y:-15});
  		}
  	}
```
  5.既然是游戏就必须有游戏规则(违反了就中断游戏)
 ```  
   //定义游戏规则
 	function isDead(){
 		//判断边界
 		if(snake[snakeCount-1].x>435||snake[snakeCount-1].y>435
 		||snake[snakeCount-1].x<0||snake[snakeCount-1].y<0){
 			alert("wendy想不开自杀了!");
 			window.location.reload();
 		}
 		//判断自身 遍历蛇身上所有坐标 判断是否与蛇头重叠	
 		for(var i=0;i<snakeCount-1;i++){
 			if(snake[snakeCount-1].x==snake[i].x&&snake[snakeCount-1].y==snake[i].y){
 				alert("wendy咬啥不好,咬自己屁股!");
 				window.location.reload();
 			}
 		}
 	}
 ``` 
 6.好了 最后一步了 游戏启动的方法
 ```        
 function btnstart(){
          //设置蛇移动速度
        (哎 有点懒，就让它自己动吧，当然也可以用手动按键实现)
         setInterval(move,150);
         //监听键盘事件
         document.onkeydown = function(e){
             //浏览器的兼容性
             var e = e||window.event;		
             keyDown(e);(为了代码风格好看点 我就把这个方法定义到下面)
         }
  }
  function keyDown(e){
  		//keyCode键码  
  		switch(e.keyCode){
  			case 37: toGO=1;(按键后,保存方向值到全局变量)
  			break;
  			case 38: toGO=2;
  			break;
  			case 39: toGO=3;
  			break;
  			case 40: toGO=4;
  			break;
  		}
  }   
  
 ``` 
 7.这里才是真的最后一步了,因为要放到浏览器执行所以页面加载时调用
 ```  
 //当前页面加载完成执行这个方法，要进如这个画布
 	window.onload = function(){
 		start();//这个start是蛇和食物最初始出现的位置
 		btnstart();
 	} 
 ```
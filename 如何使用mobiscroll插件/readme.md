### 如何使用mobiscroll插件

 > 当我们做移动端项目时,经常会碰到日期选择，城市选择等等需求
  那么如何去使用mobscroll这个插件呢？  
  首先，先得引入相关css和js文件，我使用的是mobiscroll.2.13.2.css和mobiscroll.2.13.2.css
  
  
  ``` 
    <link rel="stylesheet" href="../css/mobiscroll.2.13.2.css">
    <script src="../js/jquery-1.9.1.js"></script>
    <script src="../js/mobiscroll.2.13.2.js"></script>
  ```
  
 - 然后开始写页面，下面放一个二级联动的demo：
  ```
     <div class="formItem industrySelect clickSelect">
                <div class="listTitle">
                    <b></b>
                    <span>电影选择</span>
                </div>
                <b class="triangle"></b>
                <div data-role="fieldcontain" class="select-content">
                    <label for="names">电影选择</label>
                    <!--<input  />-->
                    <select id="names" class="select-opt" data-role="none">
                        <optgroup label="一级行业">
                            <option value="0">疯狂的石头</option>
                            <option value="1">夜店</option>
                            <option value="2">让子弹飞</option>
                            <option value="3">非诚勿扰</option>
                        </optgroup>
                        <optgroup label="惊悚片">
                            <option value="78">电锯惊魂</option>
                            <option value="79">死神来了</option>
                            <option value="80">惊声尖叫</option>
                            <option value="81">致命弯道</option>
                            <option value="82">异次元杀阵</option>
                            <option value="83">生化危机</option>
                            <option value="84">异形</option>
                        </optgroup>
                        <optgroup label="青春片">
                            <option value="118">关于莉莉周的一切</option>
                            <option value="119">东邪西毒</option>
                            <option value="120">天使爱美丽</option>
                            <option value="121">可爱的骨头</option>
                            <option value="122">猜火车</option>
                        </optgroup>
                    </select>
                </div>
            </div>
  ```
  然后写js
  ```
    $('.select-content').scroller($.extend(
            {
                preset: 'select',
                group: true,
                width: 60
            },
            {
                theme: 'mobiscroll',
                mode: 'scroller',
                display: 'modal',
                animate: 'fade'
            },
            {
                onSelect:function(val){
                    $("option").each(function(index,item){
                        if($(item).text()==val){
                            let parent = $(item).parent().attr("label");
                            $(".industrySelect input").val(parent.trim()+"-"+val.trim())
                        }
                    })
                }
            }
        ));

  ```
  ---
     再来解释一下scroller的参数，
     theme：主题，
     display:呈现方式，值有top,bottom,inline，
     lang:语言，
     showLabel:true/false,
     rows:显示多少行，定义3就显示3行,
     wheels:当前你定义的数组(即要滚动的数组),
     defaultValue:默认显示当前滚动到哪个值,
     formatResult:滚动到某个值后执行某个方法  
     
     
     下面来介绍一下css的样式自定义：
     .mbsc-mobiscroll .dwwol------------整一行，可以修改选中时上下两条线的颜色，.dw-i是在.dwwol里面的，只当前选中的值，
     .dwsc .dw-sel-----当前选中的一行，可以修改滚动到某个值时的样式，
     .dw-i----------每一行的值，无论选中还是不选中
  ---
 
  - 当然，除了这些它还有很多好用的功能，需要我们慢慢去研究...
  
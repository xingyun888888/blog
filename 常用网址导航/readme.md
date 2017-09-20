https://nodejs.org/en/

下面是掌握ant design 需要的一些学习资料。
Ant design  http://ant.design/
React  http://facebook.github.io/react/
ES6  http://www.ruanyifeng.com/blog/2016/01/babel.html


使用 React 和 Flux 创建一个记事本应用
http://blog.csdn.net/qq_21298703/article/details/44982591
https://github.com/FrontendMagazine/Works/blob/master/archive/creating_a_note_taking_app_with_react_and_flux.md

//路由
http://zhuanlan.zhihu.com/purerender/20381597
http://react-guide.github.io/react-router-cn/index.html

http://time-go.github.io/qc/
    

//redux flux框架
http://react-china.org/t/redux/2687
http://react-china.org/t/redux/1714
http://www.open-open.com/lib/view/open1444013746182.html
https://github.com/lewis617/react-redux-tutorial
https://github.com/matthew-sun/redux-example。

http://www.cnblogs.com/lewis617/p/5129609.html

http://www.reqianduan.com/2297.html

http://www.cnblogs.com/polk6/archive/2013/07/19/3142142.html

组件的详细说明
http://reactjs.cn/react/docs/component-specs.html

//CSS3时间轴
http://oss.so/blog/21.html
http://oss.so/blog/57.html
http://www.helloweba.com/view-blog-285.html
https://github.com/search?utf8=%E2%9C%93&q=timeline
https://codyhouse.co/demo/horizontal-timeline/index.html
localhost:5000/demos/<demo_name>/index.htm

react公共组件
https://github.com/facebook/react/wiki/Complementary-Tools#ui-components
http://taobaofed.github.io/react-web/

//sui
https://github.com/Semantic-Org/Semantic-UI/

//sui
http://www.semantic-ui.cn/modules/accordion.html

http://www.jq22.com/jquery-info927
id选择器指定的样式 > 类选择器指定的样式 > 元素类型选择器指定的样式

http://www.jianshu.com/p/8adf4c2bfa51

Webpack&React (五) 实现一个简单的便签应用
http://blog.csdn.net/wq_static/article/details/50678882

webpark打包
http://www.infoq.com/cn/articles/react-and-webpack?utm_source=tuicool
github.com/supnate/react-tab-selector

http://www.infoq.com/cn/articles/frontend-engineering-webpack
http://www.tuicool.com/articles/bAzMju //重要( 非常)
https://github.com/vhtml/webpack-MultiPage-static。
https://github.com/vhtml/webpack-MultiplePage

https://www.npmjs.com/package/webpack-config

https://github.com/ruanyf/webpack-demos//重要
http://www.w2bc.com/Article/50764

http://stackoverflow.com/questions/35908253/webpack-how-to-bundle-entries-to-multiple-common-chunks-with-commonschunkplugin 非常重要

webpark性能优化
https://github.com/wyvernnot/webpack_performance/tree/master/moment-example
http://cnodejs.org/topic/5681084659ec59521f2f16bb

https://segmentfault.com/a/1190000003970448

koa
http://koa.bootcss.com/

//ant-design/ant-design问题搜集
https://github.com/ant-design/ant-design/wiki/FAQ#how-to-extend-antds-components
https://github.com/ant-design/ant-design/pulls
前端技术框架：React＋Webpack＋Ant design ＋ React-Router + Babel + Redux
  
IE8兼容

https://github.com/xcatliu/react-ie8
http://react-ie8.xcatliu.com
https://github.com/spicyj/es3ify
https://github.com/ant-tool/atool-build/issues/28
https://github.com/sorrycc/es3ify-loader


http://stackoverflow.com/users/1164249/gabrielhpugliese

babel社区
https://phabricator.babeljs.io/T2817
https://github.com/ant-design/babel-plugin-antd/blob/master/package.json

//react
https://facebook.github.io/react/docs/forms.html#controlled-components

echart图表控件
http://www.tuicool.com/articles/Nza2Av
http://echarts.baidu.com/index.html
http://echarts.baidu.com/tutorial.html#ECharts%20%E7%89%B9%E6%80%A7%E4%BB%8B%E7%BB%8D

//打包工具
webpark browserify 
//文字居中
http://www.cnblogs.com/dearxinli/p/3865099.html
nodejs 文件操作
http://www.jb51.net/article/53811.htm

//nodejs 环境变量设置
http://cnodejs.org/topic/53fec0d97c1e2284788983d6
https://github.com/lcxfs1991/html-res-webpack-plugin //重要
webpack优化
http://www.cnblogs.com/Leo_wl/p/4862714.html
"debug": "set NODE_ENV=debug && dora -p 8001 --plugins webpack -p --progress --colors",
"deploy": "set NODE_ENV=production && dora -p 8001 --plugins webpack -p --progress --colors",
这时候我们可以在配置文件里使用 externals 属性来帮忙：

{
    externals: {
        // require("jquery") 是引用自外部模块的
        // 对应全局变量 jQuery
        "jquery": "jQuery"
    }
}
需要留意的是，得确保 CDN 文件必须在 webpack 打包文件引入之前先引入。
我们倒也可以使用 script.js 在脚本中来加载我们的模块：

var $script = require("scriptjs");
$script("//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js", function() {
  $('body').html('It works!')
});

//调试信息

//webpack打包
http://survivejs.com/webpack_react/introduction/
http://webpack.github.io/docs/
http://www.cnblogs.com/giveiris/p/5237080.html //重要
//react移动端
http://www.tuicool.com/articles/i2iAZvu
//reactui
http://lobos.github.io/react-ui/0.6/#/formitem
https://github.com/react-component/upload
https://www.npmjs.com/package/material-ui
http://5doe.com/custom/react-component/example/#/components/checkbox

//埋点
http://www.docin.com/p-570379371.html

//reactbarchart
https://github.com/MateusZitelli/react-bar-chart?cm_mc_uid=45865650252414587894955&cm_mc_sid_50200000=1463016110

//npm 内网源搭建
//http://blog.csdn.net/wzs_xyz/article/details/50240095
//http://cnodejs.org/topic/5405b461e84941a5715eaade
//http://blog.fens.me/nodejs-cnpm-npm/
//http://blog.fens.me/nodejs-cnpm-npm/#

//前端开发云主机
云主机名称    内网IP    配置    操作系统    账号    密码
SZB-L0026552    10.20.11.235    4核/4.0GB    LINUX    root    aU2yqcwhd

//虚拟DOM
http://react-china.org/t/dom/638
//发布日志
https://github.com/ant-design/ant-design/releases
//发布版本
https://github.com/ant-design/ant-design/wiki/%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B
//wiki
http://pagit.paic.com.cn/CHENCHAOKUN123/zz-zn
http://pagit.paic.com.cn/users/sign_in
http://pagit.paic.com.cn/WUHAIHAO309/zhizhu/wikis/pages


//react+redux 重要
https://github.com/lewis617/react-redux-tutorial

//react-router
https://zhuanlan.zhihu.com/p/20381597 //重要

//react angular性能测试对比
http://www.tuicool.com/articles/n2iqEzu

//react双向绑定
http://mdsa.51cto.com/art/201603/507441.htm//redux
http://react-china.org/t/react-0-13-2-react/729


http://reactjs.cn/react/docs/why-react.html //重要
http://react-china.org/t/react-ui/3728 //reactUI
http://www.imooc.com/qadetail/105393?t=96123 //react版本问题

http://tw93.github.io/2015-02-23/angular-react.html//性能测试

http://reactjs.cn/react/docs/reusable-components.html//官方文档

https://segmentfault.com/q/1010000003850413 //webPark output

//react-router
https://github.com/react-guide/react-router-cn/tree/master/docs//路由API文档
https://github.com/reactjs/react-router/blob/master/examples/webpack.config.js//重要
https://github.com/reactjs/react-router/blob/master/examples/huge-apps/app.js

http://www.iteye.com/topic/1142363//重要
http://web.jobbole.com/84418//react-router


//webpack  配置及项目打包编译
http://www.cnblogs.com/xianyulaodi/p/5314769.html非常重要
http://www.infoq.com/cn/articles/frontend-engineering-webpack常重要    
http://www.infoq.com/cn/articles/react-and-webpack?utm_source=tuicool //重要 深入浅出React（二）：React开发神器Webpack

EXTJS
http://extjs.org.cn/
//GRUNT构建工具
http://www.gruntjs.net/
http://www.gruntjs.net/getting-started
//UEDITOR
http://www.tuicool.com/articles/6FrEB3

//IE11补丁安装
\\cnsz023008\App\IE11\KB3139929_F12工具无法使用补丁-新

//less sass介绍
http://www.ibm.com/developerworks/cn/web/1207_zhaoch_lesscss/
/*
 * @Author: your name
 * @Date: 2020-03-23 09:07:31
 * @LastEditTime: 2020-03-23 19:59:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Ed
 * @FilePath: /studyCode/webpack学习/src/main.js
 */


//  这里的main.js是我们项目的js入口文件

// 1.导入jquery 并且用 $ 存储
// import..from..是es6中导入模块的方式
import $ from 'jquery'
// 以前的方式
// const $ = require('jquery')
// webpack默认只能打包处理js文件，如果要处理一些非js类型的文件
// 我们需要手动安装第三方的loader加载器
import './css/index.css'
import './css/index.less'
import './css/index.scss'
// 注意 如果要通过路径的形式 去引入node_modules中的相关文件，可以直接省略 路径前面的node_modules目录
import 'bootstrap/dist/css/bootstrap.css'
// import '../node_modules/bootstrap-icons/icons'
/**
 * 1.发现要处理的文件不是js文件，去配置文件中查找（正则匹配）看看有没有对应的第三方loader插件
 * 2.如果能找到对应的规则，就会调用 对应的loader处理这种类型的文件
 * 3.在调用loader的时候，是从后往前调用的 比如css : css-loader,style-loader 
 * 4.当最后的一个loader调用完毕，会把结果直接交给webpack进行打包合并，最终输出到bundle.js中去
 */

$(function(){
    $('li:odd').css('backgroundColor','blue');
    $('li:even').css('backgroundColor',function () {
        return '#'+'D97634'      
    })    
})
console.log('ok');

// class是es6新语法 用来实现es6中的面向对象编程的方式
class Person{
    // 使用static可以定义静态关键字 
    // webpack有的es6语法不识别 要用Babel转换
    static info = {name:'huayin',age:22}
}



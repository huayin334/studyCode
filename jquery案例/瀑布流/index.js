/*
 * @Author: your name
 * @Date: 2020-03-28 12:09:15
 * @LastEditTime: 2020-03-28 12:20:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /studyCode/jquery案例/瀑布流/index.js
 */
$(function () {
    waterFail()
})

function waterFail() {
    // 求列数
    let box = $('.box');
    console.log(box);   
    let boxWidth = box.width();
    console.log(boxWidth); 
    let screenWidth = $(window).width();
    // 创建数组
    // 图片遍历循环 第一排取高度值 其他的定位处理
}
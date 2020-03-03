/*
 * @Author: your name
 * @Date: 2020-03-02 08:58:31
 * @LastEditTime: 2020-03-02 10:21:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit 
 * @FilePath: /studyCode/案例/小米商城/js/index.js
 */
var tabs = document.querySelectorAll(".seckill-nav ul li")
var uls = document.querySelectorAll(".seckill-goods ul");
uls[0].style.display = "block";
for (var i = 0; i < tabs.length; i++) {
    tabs[i].setAttribute("index", i)
    tabs[i].addEventListener("click", function () {
        // 排他
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].className = "";
            uls[i].style.display = "none";
            // console.log(uls[i]);            
        }
        this.className = "active";
        var index = this.getAttribute('index')
        uls[index].style.display = "block";
        // 这里不能用i来判断uls[i]因为每次都是循环完了，i总是5
        // 要提前给tabs加一个自定义属性把i的值记录下来
        // console.log(i);      
    })
}

// console.log(scrollTop);270px

var tab = document.querySelector(".seckill-nav")
window.addEventListener("scroll", function () {
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 260) {
        tab.className = "seckill-nav seckill-navfixed";
    } else {
        tab.className = "seckill-nav";
    }

})
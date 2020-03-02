/*
 * @Author: your name
 * @Date: 2020-03-02 08:58:31
 * @LastEditTime: 2020-03-02 09:15:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit 
 * @FilePath: /studyCode/案例/小米商城/js/index.js
 */
var tabs = document.querySelectorAll(".seckill-nav ul li")

for(var i =0;i<tabs.length;i++){
    tabs[i].addEventListener("click",function(){
        // 排他
        for(var i=0;i<tabs.length;i++){
            tabs[i].className=""
        }
        this.className="active"      
    })
}
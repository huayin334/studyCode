/*
 * @Author: your name
 * @Date: 2020-02-25 12:53:34
 * @LastEditTime: 2020-02-26 10:15:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit.
 * @FilePath: /studyCode/案例/js/index.js
 */
window.addEventListener("load", function () {
    // 1.获取元素
    var left = document.querySelector(".left");
    var right = document.querySelector(".right");
    var focus = document.querySelector(".focus");
    // 鼠标经过轮播图显示左右案例
    focus.addEventListener("mouseenter", function () {
        left.style.display = "block";
        right.style.display = "block";
        // 鼠标经过时，停止自动播放
        clearInterval(timer);
        timer = null; //清除定时器变量
    })
    focus.addEventListener("mouseleave", function () {
        left.style.display = "none";
        right.style.display = "none";
        timer = setInterval(function () {
            // 手动调用点击事件
            right.click();
        }, 2000)
    })

    // 动态创建底部小圆圈，和图片个数相等
    var ul = focus.querySelector("ul");
    var ol = focus.querySelector("ol");
    var focusWidth = focus.offsetWidth;
    // 图片的个数
    console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        // 创建li
        var li = document.createElement("li")
        // 记录当前小圆圈的索引号，用自定义属性来做
        li.setAttribute("index", i)
        // 把li插入ol
        ol.appendChild(li)
        // 生成li的同时，绑定事件
        li.addEventListener("click", function () {
            // 排他思想,所有li清空类名
            for (i = 0; i < ol.children.length; i++) {
                ol.children[i].className = "";
            }
            // 留下我自己
            this.className = "current"
            // 点击小圆圈，移动图片，移动的是ul，小圆圈的索引号*一个图片的宽度
            // 调用动画函数
            var index = this.getAttribute("index")
            // 当点击了小li就要把li的索引号给num!!!
            num = index;
            // circle控制小圆圈 也要得到index
            cirlce = index;
            animate(ul, -index * focusWidth, function () {})
        })
    }
    // 把第一个li的类名设为current
    ol.children[0].className = "current";
    // 克隆第一张图片，放在最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 节流阀：防止右侧按钮点击过快 动画过快
    var flag = true;
    var right = focus.querySelector(".right");
    var num = 0;
    // 控制小圆圈的播放
    var cirlce = 0;
    // 点击右侧按钮，图片播放下一张 
    right.addEventListener("click", function () {
        if (flag) {
            flag = false; //关闭节流阀
            // 无缝滚动 如果走到最后一张复制的图片，此时要回到第一张，将left改为0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            flag = false;
            animate(ul, -num * focusWidth, function () {
                flag = true; //打开节流阀
            })
            cirlce++;
            // circle==3则到了最后一张克隆的图片了，一共三个小圆圈
            if (cirlce == ol.children.length) {
                cirlce = 0;
            }
            circleChange()
        }
    })
    left.addEventListener("click", function () {
        if (flag) {
            flag = false;
            //此时是第一张图片，如果还点击则把left设为倒数第二张的left
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + "px";
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            })
            cirlce--;
            // 如果cirlce<0 则改为3，一共有四张图片，但是最后一张跟第一张一样，做无缝滚动的
            // 其实一共3张图片
            if (cirlce < 0) {
                cirlce = ol.children.length - 1;
            }
            circleChange();
        }
    })

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = "";
        }
        ol.children[cirlce].className = "current";
    }
    // 自动播放,就好像是点击右侧按钮
    var timer = setInterval(function () {
        // 手动调用点击事件
        right.click();
    }, 2000)
})
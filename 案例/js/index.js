window.addEventListener("load", function () {
    // 获取元素
    var focus = document.querySelector(".focus");
    var ol = focus.children[1];
    var ul = focus.children[0];
    // 获得focus的宽度
    var w = focus.offsetWidth;
    var index = 0;
    //定时滚动
    var timer = setInterval(function () {
        index++;
        var translatex = -index * w;
        ul.style.transition = "all .3s"
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000)
    // 等着过渡完成后 再去判断 监听过渡完成的事件 transitionend
    ul.addEventListener("transitionend", function () {
        // 无缝连接
        if (index >= 3) {
            index = 0;
            // 去掉过渡效果
            ul.style.transition = "none"
            // 利用最新的宽度来跳到第一张图片
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = "none"
            // 利用最新的宽度来跳到第一张图片
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';

        }
        // 小圆点跟随变化
        // 把ol中的li带有current类的remove掉
        ol.querySelector("li.current").classList.remove("current");
        // 当前索引号的小li加上current add
        ol.children[index].classList.add("current");
    })
    // 手指滑动轮播图 
    var startx = 0;
    var movex = 0;
    var flag = false;
    // 触摸元素，得到初始手指的x坐标
    ul.addEventListener("touchstart", function (e) {
        startx = e.targetTouches[0].pageX;
        // 手指触摸的时候，停止定时器
        clearInterval(timer);
    })
    ul.addEventListener("touchmove", function (e) {
        // 计算移动距离
        // console.log(e.targetTouches);      
        movex = e.targetTouches[0].pageX - startx
        // 移动盒子 盒子原来的位置+手指移动的距离
        var translatex = -index * w + movex;
        // 手指移动不用动画效果
        ul.style.transition = "none"
        ul.style.transform = 'translate(' + translatex + 'px)';
        flag = true;
    })
    ul.addEventListener("touchend", function (e) {
        if (flag) {
            if (Math.abs(movex) > 50) {
                // 如果右滑，播放上一张 movex是正值
                if (movex > 0) {
                    index--;
                } else {
                    // 如果左滑，播放上一张 movex是负值
                    index++;
                }
                var translatex = -index * w;
                ul.style.transition = "all .3s";
                ul.style.transform = 'translate(' + translatex + 'px)';
            } else {
                // 回弹
                var translatex = -index * w;
                ul.style.transition = "all .1s";
                ul.style.transform = 'translate(' + translatex + 'px)';
            }
        }

        // 手指离开，重启
        clearInterval(timer);
        var timer = setInterval(function () {
            index++;
            var translatex = -index * w;
            ul.style.transition = "all .3s"
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000)

    })

})
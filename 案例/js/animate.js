/*
 * @Author: your name
 * @Date: 2020-02-25 11:32:54
 * @LastEditTime: 2020-02-25 13:42:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /studyCode/animate.js
 */

        // 动画函数
        // 注意！！！使用element.style.left改变元素位置时，元素一定要加定位！！！
        // 每次触发事件时都会调用函数，会一直加定时器，出现超级多定时器
        // 只要在定时器前面加一个清除定时器，就可以每次只有一个定时器啦
        // 解决了bug 定时器要加到obj上去，obj.timer!!!!!
        function animate(obj, target, callback) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                console.log(obj.style.left);
                // 缓动动画 步长公式 步长值要改为整数 往大了取整
                // 步长值可能为正也可能为负
                // 为正 往大了取
                // 为负 往小了取
                var step = (target - obj.offsetLeft) / 10
                step = step > 0 ? Math.ceil(step) : Math.floor(step)
                if (obj.offsetLeft == target) {
                    // 调用回调函数：等着动画执行完
                    callback();
                    clearInterval(obj.timer);
                }
                obj.style.left = obj.offsetLeft + step + "px"
            }, 15)
        }
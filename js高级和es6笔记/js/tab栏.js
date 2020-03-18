/*
 * @Author: your name
 * @Date: 2020-03-11 08:56:02
 * @LastEditTime: 2020-03-12 09:12:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /studyCode/es6笔记/js/two.js
 */
var that;
class Tab {
    // 接收参数
    constructor(id) {
        that = this;
        // 获取元素
        this.main = document.querySelector(id);
        this.add = this.main.querySelector(".tabadd");
        this.ul = this.main.querySelector(".firstnav ul:first-child");
        this.fsection = this.main.querySelector(".tabscon");
        this.init();
    }
    init() {
        // 先获取元素 再绑定事件
        this.updateNode();
        console.log(this.main);
        console.log(this.lis);
        // init 初始化 相关元素绑定事件
        for (var i = 0; i < this.lis.length; i++) {
            // 此处是加在对象里的属性
            // setAttribute是给标签上加自定义属性，不要搞混了
            this.lis[i].index = i;
            // 此处toggleTab不用加小括号，不然会页面加载的时候就会调用
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            // 给span和sections添加绑定事件 鼠标双击事件
            this.spans[i].ondblclick = this.aditTab;
            this.sections[i].ondblclick = this.aditTab;
        }
        this.add.onclick = this.addTab;
    }
    // 获取小li和section 更新
    updateNode() {
        this.lis = this.main.querySelectorAll("li");
        this.sections = this.main.querySelectorAll("section");
        this.remove = this.main.querySelectorAll(".icon-cha");
        this.spans = this.main.querySelectorAll(".firstnav li span:first-child");
    }
    // 1.切换功能
    toggleTab() {
        // 排他思想 that指向实例对象
        that.clearClass();
        this.className = 'liactive';
        // 注意此处that.sections，是constructor里面的sections，
        // 因为这里的this指向的是lis！！！
        that.sections[this.index].className = 'conactive';
    }
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 2.添加功能
    addTab() {
        that.clearClass();
        var random = Math.random();
        //  1.创建li和section
        var li = ` <li class="liactive"><span>1</span><span class="iconfont icon-cha"></span></li>`
        var section = `<section class="conactive">${random}</section>`
        // 2.追加 把li追加到父元素里面的最后面
        that.ul.insertAdjacentHTML("beforeend", li);
        that.fsection.insertAdjacentHTML("beforeend", section);
        that.init();
    }
    // 3.删除功能
    removeTab(e) {
        // 阻止冒泡 防止触发li的切换点击事件
        e.stopPropagation();
        var index = this.parentNode.index;
        console.log("删除" + index);
        // 根据索引号删除li和section
        // 叉号调用的的removeTab 所以这里的this指向叉号
        // remove方法可以直接删除元素
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 当我们删除的不是选中状态的时候，让选定状态的不变
        if (document.querySelector(".liactive")) return;
        // 当我们删除了选中状态的li时 让前一个li处于选中状态
        index--;

        // 手动调用点击事件 不需要鼠标触发
        // 如果index>=0则前面是真，才会执行后面的点击操作
        // 这样就不需要if判断啦～
        that.lis[index] && that.lis[index].click();

    }
    // 4.修改功能
    aditTab() {
        var str = this.innerHTML;
        //   双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // 这个this指向span
        this.innerHTML = '<input type="text" />'
        var input = this.children[0];
        input.value = str;
        // 文本框的文字处于选中状态
        input.select();
        // 当我们离开文本框就把文本框里面的值给span
        input.onblur = function () {
            // 此时的this是input input的父亲是span
            // 更改span的html，正好也把文本框取代了，文本框会消失
            this.parentNode.innerHTML = this.value;
        }
        // 按下回车也可以赋值
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                // 手动调用失去焦点事件 不需要鼠标移开操作
                this.blur();
            }
        }
    }
}
var tab = new Tab("#tab");
// tab.init();
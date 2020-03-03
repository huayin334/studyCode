/*
 * @Author: huayin
 * @Date: 2020-03-02 19:00:39
 * @LastEditTime: 2020-03-03 20:38:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /studyCode/jquery案例/todolist/js/todolist.js
 */
$(function () {
    // 每次一开始就渲染页面
    load();
    var todolist = [{
        title: '今天要写作业',
        done: false
    }, {
        title: '今天要吃饭',
        done: true

    }];
    // 1.本地存储只能存储字符串的数据格式
    // 把我们的数组对象转换成字符串格式 json.stringify()
    localStorage.setItem("todo", JSON.stringify(todolist))
    // 2.取出来用的时候，把字符串转换为数组对象json.parse()
    var data = localStorage.getItem("todo")
    data = JSON.parse(data);

    // input监听
    $(".head input").keyup(function (e) {
        // 回车键 ascii码=13
        if (e.keyCode === 13) {
            if ($(this).val() === "") {
                alert("调皮～都没有输入内容呢")
            } else {
                // 先读取本地存储原来的数组
                var local = getDate();
                // 先把新数据放在数组里，再存进本地存储
                local.push({
                    title: $(this).val(),
                    done: false
                })
                // 保存在本地存储
                saveDate(local);
                // 清空input框
                $(this).val('');
                load(data);
            }
        }
    })

    // 删除按钮监听
    // a是动态创建的，所以要用on的方式监听
    $("ul,ol").on("click", "a", function () {
        // 获取本地存储数据
        var data = getDate();
        // 修改数据
        var index = $(this).attr("id")
        console.log(index);
        // 先把data中的数据删掉，再把data存到本地，再渲染页面
        // splice返回被删除的元素
        data.splice(index, 1);
        saveDate(data);
        load(data);
    })
    // 监听input框
    $("ol,ul").on("click", "input", function () {
        // 获取本地数据
        var data = getDate();
        // 修改数据
        // 拿到兄弟a的索引号
        var index = $(this).siblings("a").attr("id")
        console.log(index);

        // 把done修改为当前复选框的选中状态
        data[index].done = $(this).prop("checked")
        // 存储数据
        saveDate(data);
        // 重新渲染
        load(data);
    })

    // 读取本地存储的数据
    function getDate() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            // 转换格式，拿到本地存储的数据
            return JSON.parse(data);
        } else {
            //若为空 则从来没有存过数据 返回空数组
            return [];
        }
    }
    // 存储数据
    function saveDate(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }
    // 渲染加载数据
    function load(data) {
        var todoCount = 0;
        var doneCount = 0;
        // 读取
        var data = getDate();
        // console.log(data);
        // 遍历之前 先清空ol,ul里的元素
        $('ol,ul').empty();
        // 遍历 用来遍历数组 i是索引 n是值
        // 把索引号动态添加到a的自定义属性id中
        $.each(data, function (i, n) {
            if (n.done) {
                doneCount++;
                $("ul").prepend("<li><input type='checkbox' checked='checked'><p>" + n.title + "</p><a href='javascript:;' id='" + i + "'>删除</a></li>")
            } else {
                todoCount++
                $("ol").prepend("<li><input type='checkbox'><p>" + n.title + "</p><a href='javascript:;' id='" + i + "'>删除</a></li>")
            }
        })
        $("#todocount").text(todoCount)
        $("#donecount").text(doneCount)

    }
})
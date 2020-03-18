/*
 * @Author: your name
 * @Date: 2020-03-12 17:35:24
 * @LastEditTime: 2020-03-13 14:37:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /studyCode/案例/查询方法/index.js
 */


//  新增数组方式操作数据
var data = [{
    id: 1,
    pname: '小米',
    price: 3999
}, {
    id: 2,
    pname: '红米',
    price: 999
}, {
    id: 3,
    pname: 'oppo',
    price: 1299
}, {
    id: 4,
    pname: 'oppo',
    price: 4299
}];

// 获取相应的元素
var tbody = document.querySelector("tbody");
// 渲染数据
function init(datas) {
    tbody.innerHTML='';
    datas.forEach(function (value) {
        console.log(value);   
        var tr = document.createElement('tr');       
        tr.innerHTML = `<td>${value.id}</td><td>${value.pname}</td><td>${value.price}</td>`;
        tbody.appendChild(tr);
    })
}
init(data);
var start = document.querySelector('.start');
var end = document.querySelector('.end');
var searchPri = document.querySelector('.search-price');

var product = document.querySelector('.product');
var searchPro = document.querySelector('.search-pro');


// 查询价格点击事件
searchPri.addEventListener('click', function () {
    // 点击了之后再获取的值，不能写在外面，写在外面就是最开始就获取了值
    var startP = start.value;
    var endP = end.value;
    searchPrice(startP, endP);
    start.value='';
    end.value='';
})

// 查询商品名称事件
searchPro.addEventListener('click',function () {
    var productName = product.value;
    searchProduct(productName);
    product.value='';
    
})

// 查询价格函数
function searchPrice(startP, endP) {
    var newData = data.filter(function (value) {
         return value.price >= startP && value.price <= endP;
     })
     init(newData);
 }
 
//  查询产品名称函数
 function searchProduct(name){
    var newData = data.filter(function(value){
        return value.pname===name;
    })
    init(newData);
}

// 一个题目
const a = {}
const b = {key:'b'};
const c = {key:'c'};
console.log(b);
a[b]=123;
a[c]=456;
console.log(a);
console.log(a[b]);

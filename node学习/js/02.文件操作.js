/*
 * @Author: huayin
 * @date: 2020-04-21 11:51
 * @update: 2020-04-21 11:51
 */
//1.使用require方法加载fs核心模块
let fs = require('fs');

//2.读取文件
/*
* 参数1：读取的文件的路径
* 参数2：回调函数
* error：失败error就是错误对象，成功error就是null
* data：成功data就是获取到的数据对象，成功data就是null
* */
fs.readFile('../data/hello.txt',(err,data)=>{
  console.log(err)
  console.log(data)
  console.log(data.toString())
})

//3.写文件
/*
* 参数1：文件路径
* 参数2：文件内容
* 参数3：回调函数,只接收一个参数err
* */
fs.writeFile('../data/hhh.txt','写到文件里111',(err)=>{
  console.log(err);
})
/*
 * @Author: your name
 * @Date: 2020-03-28 17:24:28
 * @LastEditTime: 2020-03-28 17:27:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /studyCode/vue学习/promise/读取文件的方法.js
 */


/***
 * 需求： 封装方法，读取文件内容
 */

 const fs = require('fs');
 const path = require('path')

 fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,dataStr)=>{
     if(err) throw err
     console.log(dataStr)
 })
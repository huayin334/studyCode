/*
 * @Author: huayin
 * @date: 2020-04-27 15:56
 * @update: 2020-04-27 15:56
 */

const express = require('express')

//创建服务器
const app = express()

//公开指定目录
//只要这样做了，你就可以直接通过/public/xx的方式访问public目录中的所有的资源了
app.use('/public/',express.static('./public/'))

//当服务器收到get请求 / 时，执行回调函数
app.get('/',(req,res)=>{
  res.send('hello world')
})

//框架自动帮忙处理了中文！！！而且也会自动识别html～太好了
app.get('/about',(req,res)=>{
  res.send('你好，我是about')
})

//监听3000
app.listen(3000,()=>{
  console.log('在监听3000:http://127.0.0.1:3000')
})
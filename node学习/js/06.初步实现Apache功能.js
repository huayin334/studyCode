/*
 * @Author: huayin
 * @date: 2020-04-21 20:39
 * @update: 2020-04-21 20:39
 */
//引入模块
let http = require("http");
let fs = require('fs');
//1.创建Server
let server = http.createServer();

//2.监听Server的request请求事件，设置请求处理函数
/*
* 请求，响应
* 一个请求对应一个响应，如果在一个请求过程中，已经结束响应了，则不能重复发送响应
* 没有请求就没有响应
* */
server.on("request", (req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.end("hello world");
  } else if (req.url === '/index.html'){
    fs.readFile('../data/index.html',(err, data)=>{
      if (err){
        return res.end('404 Not Found.')
      }
      // 这里不需要设置文件编码，html里面有编码设置
      res.end(data);

    })
  }else if (req.url === '/hello.txt'){
    fs.readFile('../data/hello.txt',(err,data)=>{
      if (err){
        return res.end('404')
      }
      res.setHeader('Content-Type','text/plain;charset=utf-8')
      res.end(data);
    })
  }
});

//3.绑定端口号，启动服务
server.listen(3000, () => {
  console.log("启动了，可以通过http://127.0.0.1:3000/来进行访问");
});
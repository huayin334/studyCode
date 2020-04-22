/*
 * @Author: huayin
 * @date: 2020-04-21 20:39
 * @update: 2020-04-21 20:39
 */
//引入模块
let http = require("http");

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
  } else {
    res.end("404");
  }
  res.end("结束");
});

//3.绑定端口号，启动服务
server.listen(3000, () => {
  console.log("启动了，可以通过http://127.0.0.1:3000/来进行访问");
});
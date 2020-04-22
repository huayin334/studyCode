/*
 * @Author: huayin
 * @date: 2020-04-21 14:33
 * @update: 2020-04-21 14:33
 */

//1.加载http核心模块
let http = require("http");

//2.使用http.createServer()方法创建一个web服务器
//返回一个Server实例
let server = http.createServer();

//3.服务器：用来提供对数据的服务
/*
* 注册request请求事件
* 当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调函数
* request：请求对象->获取客户端的一些请求信息，例如请求路径
* response：响应对象->给客户端发送响应消息
* */
server.on("request", (request, response) => {
  console.log("收到你的请求啦～，请求路径是：", request.url);
//  response对象有一个方法：write可以用来给客户端发送响应数据
//  write可以使用多次，但是一定要使用end来结束响应，否则客户端会一直等待
  response.write("hello  ");
  response.write("huayin");
  if (request.url==='/a'){
    response.write('我是/a路径下的内容')
  }
  response.end();
//这种简单的方式，在end的同时，发送数据
//   response.end('12');
});

//4.启动服务器
/*
* 绑定端口号
* */
server.listen(3000, () => {
  console.log("启动成功，可以通过http://127.0.0.1:3000/来进行访问");
});
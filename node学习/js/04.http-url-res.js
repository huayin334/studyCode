/*
 * @Author: huayin
 * @date: 2020-04-21 15:18
 * @update: 2020-04-21 15:18
 */

let http = require("http");
let server = http.createServer();
server.on("request", (req, res) => {
  //此处的url是不包含ip和端口号的，都是以 / 开头
  let url = req.url;
  if (url === "/") {
    res.end("index");
  } else if (url === "/login") {
    let login = {
      name:'huayin',
      age:'21',
      ch:'花音'
    }
    //在http协议中，Content-Type来告知对方我给你发送的数据内容是什么类型
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    //响应的内容必须是字符串或者是二进制
    res.end(JSON.stringify(login));
  } else {
    res.end("404");
  }

});

server.listen(3000, () => {
  console.log("启动成功，可以通过http://127.0.0.1:3000/来进行访问");
});
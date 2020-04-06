const express = require("express");
const compression = require("compression");
//创建web服务器
const app = express();
//这一行代码要写在静态资源托管之前 开启gzip压缩 启用中间件
app.use(compression());
//托管静态资源
app.use(express.static("./dist"));
//启动web服务器
app.listen(80, () => {
    console.log("server running at http://127.0.0.1");
});

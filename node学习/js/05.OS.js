/*
 * @Author: huayin
 * @date: 2020-04-21 16:18
 * @update: 2020-04-21 16:18
 */

//用来获取机器信息
let os = require('os');
//用来操作路径
let path = require('path');

//获取当前机器的CPU
console.log(os.cpus());

//运行内存大小 单位是字节
console.log(os.totalmem())
//单位换算成G
console.log(os.totalmem()/1024/1024/1024)

//获取一个路径的扩展名部分
//输出 .txt
console.log(path.extname('c:dji/ad.txt'))
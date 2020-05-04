/*
 * @Author: huayin
 * @date: 2020-04-27 09:27
 * @update: 2020-04-27 09:27
 */

let a = 8 ;
let name = 'huayin';
let age = 21;
//exports是一个对象 可以多次为对象添加成员
// exports.fooa=a;
// exports.fooname = name;
// exports.fooage = age;

//如果想直接导出某个成员，使用modules.export
// module.exports = 'hello'

module.exports={
  fooname:name,
  fooage:age
}
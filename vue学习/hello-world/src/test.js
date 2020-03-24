/*
 * @Author: your name
 * @Date: 2020-03-24 09:14:34
 * @LastEditTime: 2020-03-24 09:26:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edite
 * @FilePath: /studyCode/vue学习/hello-world/src/test.js
 */
export default {
    name: 'huayin',
    age: 22
}
// 注意export default向外暴露的成员 
// 可以使用任意的变量来接收
// 在一个模块中，export default 只能使用一次
// 但是可以同时使用export default和export

// export default{
//     adress:'北京'
// }

// 使用export向外暴露的成员 只能使用{}来接受 这种形式叫做【按需导出】
// 使用export 必须严格使用导出时候的名称 来接收
export var tilte = '小星星';
export let hhh = '哈哈哈'
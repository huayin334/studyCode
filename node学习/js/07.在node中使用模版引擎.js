/*
 * @Author: huayin
 * @date: 2020-04-22 09:58
 * @update: 2020-04-22 09:58
 */
//art-template
/*
* 不仅可以在浏览器中使用，还可以在node中使用
* */

let template = require("art-template");

let ret = template.render("hello {{ name }}", {
  name: "huayin"
});
console.log(ret);
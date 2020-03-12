/*
 * @Author: your name
 * @Date: 2020-03-10 15:44:00
 * @LastEditTime: 2020-03-10 16:18:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /studyCode/面试专用/test.js
 */
var arr = [1, 1];
function getNum(j) {
    var a = '';
    if (j > 2) {
        for (var i = 0; i < j + 1; i++) {
            a = arr[i] + arr[i + 1]
            arr.push(a)
        }
    }
    return arr[j - 1];
}
console.log(getNum(1477));
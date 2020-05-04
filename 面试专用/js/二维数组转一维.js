/*
 * @Author: huayin
 * @date: 2020-04-22 17:16
 * @update: 2020-04-22 17:16
 */

let arr = [[2,43,3,24],[3,4,23,444],[2,737,65,447]];
let newArr = []
arr.forEach(item=>{
  item.forEach(i =>{
    newArr = newArr.push(i);
  })
})

console.log(newArr);
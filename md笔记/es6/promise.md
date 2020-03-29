#### promise

> 主要是用来解决回调地狱问题的

```javascript
//创建一个promise的实例对象
let promise = new Promise((resolve,reject)=>{
  //判断异步结果是成功还是失败
  //成功
  if('条件'){
    //resolve和reject在这写着是不执行的 只是起传递参数的作用
    //在下面执行
     resolve(成功参数res)
    //失败
     }else{
       reject(失败参数err)
    }
})

//成功或者失败之后执行下面的函数，成功执行then里面的函数，失败则执行catch里的函数
//这里的函数都是异步的，其他的同步的代码执行完了之后 才会执行异步的函数
//finally里面的函数会在结束时调用 不管是成功还是失败
promise.then((res)=>{})
       .catch((err)=>{})
       .finally(()=>{})
```



promise有三种状态：

pending(未决的),

resolved(已完成),

rejected(已拒绝)



#### async和await，throw

> promise虽然解决了回调地狱的问题，但写起来代码有些繁琐
>
> es7中新增异步函数：让我们将异步代码写成同步的形式。

```javascript
//在普通函数前面加上一个async，就变成了异步函数
//异步函数的返回值默认是一个promise
async function fn(){
  //抛出错误 throw执行后，后面的代码不再执行
  throw '发生了一些错误'
  //await关键字 只能出现在异步函数中 后面跟一个promise 可以暂停异步函数的执行
  //等待promise返回结果后 再向下执行
  await p1()
  //return将结果返回 结果会
  return data
  
}
//调用
fn().then((res)=>{})
    .catch((err)=>{
  //这里的err是throw后面的字符串
  console.log(err);
})
```



#### axios 

> 一个基于promise的http请求库，nodejs和浏览器端都可以用

```javascript
	// 为给定 ID 的 user 创建请求
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// 上面的请求也可以这样做
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

##### 在vue中使用axios

1.下载axios

```javascript
npm install axios
```

2.在main.js中引入

```javascript
// 引入
import axios from 'axios'
// 设置请求的根地址
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 把axios赋值给Vue的原型对象上
Vue.prototype.$http = axios
Vue.use(axios)

//然后这样使用
vue.$http.get('url')//返回的是一个promise 所以可以直接用await简化异步代码
```






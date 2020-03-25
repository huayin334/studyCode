/*
 * @Author: your name
 * @Date: 2020-03-24 14:56:32
 * @LastEditTime: 2020-03-25 10:29:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /studyCode/vue_shop/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入axios
import axios from 'axios'
// 设置请求的根地址
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 相当于在请求之前预处理
// 给axios请求拦截器添加token
axios.interceptors.request.use(config => {
  // 为请求头对象，添加token验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
})
// 把axios赋值给Vue的原型对象上
Vue.prototype.$http = axios
Vue.use(axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

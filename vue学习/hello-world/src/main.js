/*
 * @Author: your name
 * @Date: 2020-03-24 08:47:07
 * @LastEditTime: 2020-03-24 10:31:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit 
 * @FilePath: /studyCode/vue学习/hello-world/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'

import m1, {
  tilte as tilte1,
  hhh
} from './test.js'
// 导入router
import router from './router'

// 导入mint-ui
// 把所有的组件都导入了 相当于把所有的组件注册为全局组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 将mint-ui安装到vue中
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  // 注册router
  router,
  // 渲染app这个组件 组件都以.vue结尾
  render: h => h(App)
}).$mount('#app')

console.log(m1);
console.log(tilte1);
console.log(hhh);


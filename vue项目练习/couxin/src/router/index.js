import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Home'
import About from  '../components/About'
// 1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)
//2.创建VueRouter对象
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes:[
    {
      path:'',
      //重定向,相当于把''路径定向到/home
      redirect:'/home'
    },
    {
      //协议头
      path:'/home',
      component:Home
    },
    {
      path:'/about',
      component: About
    }
  ],
  mode:'history'
})
//3.将router对象传入到vue实例中
export default router
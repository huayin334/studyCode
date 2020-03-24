<!--
 * @Author: your name
 * @Date: 2020-03-24 08:47:07
 * @LastEditTime: 2020-03-24 11:18:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /studyCode/vue学习/hello-world/src/App.vue
 -->
<template>
  <div id="app">
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-view></router-view>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary" @click='show'>primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    <mt-switch v-model="value"></mt-switch>
  </div>
</template>

<script>
// 导入Toast组件
import { Toast } from 'mint-ui';
// node中
// 导入使用 let 名称 = require('模块标识符')
// 向外暴露成员 module.exports={} 和 exports

// es6中
// 导入 import 模块名称 from ‘模块标识符’  或者 import '表示路径'
// export default{} 或者 export 向外暴露成员
export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
      msg: "123",
      value:true
    };
  },
  methods: {
    show() {
      console.log("show");
      Toast({
        message:'消息',
        duration:3000,
        position:'top'
       })
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

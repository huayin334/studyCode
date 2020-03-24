
// 1.npm下载
// 2.导入
// 发现用命令行下载的vue是阉割版的 只提供了runtime-only模式
// import Vue from 'vue'
import Vue from '../node_modules/vue/dist/vue.js'
const vm = new Vue({
    el:'#app',
    data:{
        msg:'123'
    }
})
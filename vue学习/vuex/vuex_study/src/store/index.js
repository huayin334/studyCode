import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  // 管理一些共有的属性
  state: {
    num: 1000,
    people: [
      { name: 'qdq', age: 12 },
      { name: 'qdq', age: 22 },
      { name: 'qdq', age: 15 },
      { name: 'qdq', age: 28 }
    ]
  },
  mutations: {
    // 方法 事件类型+回调函数
    increment (state) {
      state.num++
    },
    decrement (state) {
      state.num--
    },
    addCount (state, count) {
      state.num += count
    }
  },
  // 做一些异步操作
  actions: {},
  // 就像计算属性
  getters: {
    // 平方
    powerNum (state) {
      return state.num * state.num
    },
    // 对数组进行过滤
    peopleOld (state) {
      return state.people.filter(item => item.age > 20)
    },
    peopleOldLength (state, getters) {
      return getters.peopleOld.length
    }
  },
  // 划分模块
  modules: {}
})

// 3.导出store共享
export default store

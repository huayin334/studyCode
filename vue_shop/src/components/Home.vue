<!--
 * @Author: your name
 * @Date: 2020-03-24 20:28:11
 * @LastEditTime: 2020-03-25 08:03:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /studyCode/vue_shop/src/components/Home.vue
 -->
<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      //  清除本地缓存（token）
      window.sessionStorage.clear();
      // 重新跳转到login页面
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped></style>

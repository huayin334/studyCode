<!--
 * @Author: your name
 * @Date: 2020-03-26 10:49:20
 * @LastEditTime: 2020-03-26 18:51:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /studyCode/vue_shop/src/components/power/Roles.vue
 -->
<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图 -->
    <el-card>
      <!-- 添加角色按钮 -->
      <el-row>
        <el-col>
          <el-button type="primary">添加角色</el-button>
        </el-col>
      </el-row>
      <!-- 角色列表 -->
      <el-table :data="rolelist" border stripe>
        <!-- 展开列 type设为expand即可-->
        <el-table-column type="expand">
          <template slot-scope="scope">
             
            <el-row
              :class="['bdbottom', i1 === 0 ? 'bdtop' : '', 'vcenter']"
              v-for="(item1, i1) in scope.row.children"
              :key="item1.id"
            >
              <!-- 一级权限 -->
              <el-col :span="5">
                <el-tag closable  @close="removeRightById(scope.row,item1.id)">{{ item1.authName }}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <!-- 二级权限和三级权限 -->
              <el-col :span="19">
                <!-- 通过for循环 嵌套渲染二级权限 -->
                <el-row
                  :class="[i2 === 0 ? '' : 'bdtop', 'vcenter']"
                  v-for="(item2, i2) in item1.children"
                  :key="item2.id"
                >
                  <el-col :span="6">
                    <el-tag type="success" closable  @close="removeRightById(scope.row,item2.id)">{{
                      item2.authName
                    }}</el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="18">
                    <el-tag
                      closable
                      @close="removeRightById(scope.row,item3.id)"
                      v-for="(item3, i3) in item2.children"
                      type="warning"
                      :key="item3.i3"
                    >
                      {{ item3.authName }}
                    </el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <!-- 索引列 -->
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="roleName" label="角色名称"> </el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini"
              >编辑</el-button
            >
            <el-button type="danger" icon="el-icon-delete" size="mini"
              >删除</el-button
            >
            <el-button type="warning" icon="el-icon-setting" size="mini"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //所有角色列表数据
      rolelist: []
    }
  },
  created() {
    this.getRolesList()
  },
  methods: {
    //获取所有角色的列表
    async getRolesList() {
      const { data: res } = await this.$http.get('roles')
      if (res.meta.status !== 200) {
        return this.$message.error('获取角色列表失败')
      }
      this.rolelist = res.data
      console.log(this.rolelist)
    },
    // 根据id删除对应的权限
   async removeRightById(user,rightId) {
     const comfirmResult =await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if(comfirmResult!=='confirm'){
         return this.$message.info('取消了删除')
      }
        const {data:res} = await this.$http.delete(`roles/${user.id}/rights/${rightId}`)
        console.log(res);
        
        if(res.meta.status!==200) return this.$message.error('删除权限失败')
        // 刷新列表 页面完整渲染 会导致列表关闭 不建议使用
        // this.getRolesList()
        // data是接口返回的新的列表
        user.children = res.data
        this.$message.success('删除成功')
    }
  }
}
</script>

<style lang="less" scoped>
.el-card {
  margin-top: 15px;
}
.el-tag {
  margin: 7px;
}
.bdtop {
  border-top: 1px solid #eee;
}
.bdbottom {
  border-bottom: 1px solid #eee;
}
.vcenter {
  display: flex;
  align-items: center;
}
</style>

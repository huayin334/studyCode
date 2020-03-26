<!--
 * @Author: your name
 * @Date: 2020-03-25 12:11:14
 * @LastEditTime: 2020-03-26 08:39:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /studyCode/vue_shop/src/components/user/Users.vue
 -->
<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card class="box-card" shadow="never" body-style="padding-top:10px">
      <div style="margin-top: 15px;">
        <!-- 输入框和搜索按钮 -->
        <el-row :gutter="20">
          <el-col :span="12">
            <!-- 输入框 -->
            <el-input
              clearable
              @clear="getUserList"
              placeholder="请输入内容"
              v-model="queryInfo.query"
              class="input-with-select"
            >
              <el-button
                slot="append"
                icon="el-icon-search"
                @click="getUserList"
              ></el-button>
            </el-input>
          </el-col>
          <!-- 按钮 -->
          <el-col :span="4">
            <el-button type="primary" @click="addDialogVisible = true"
              >添加用户</el-button
            >
          </el-col>
        </el-row>
      </div>
      <!-- 表格区 -->
      <el-table :data="userlist" style="width: 100%" border stripe>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column
          prop="username"
          label="姓名"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          width="180"
        ></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <!-- {{ scope.row.mg_state }}按钮的状态 -->
            <el-switch
              v-model="scope.row.mg_state"
              @change="userStateChanged(scope.row)"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- 修改角色按钮 文字提示-->
            <el-tooltip
              class="item"
              effect="dark"
              content="修改角色"
              placement="top"
              :enterable="false"
            >
              <!-- 修改角色按钮 -->
              <el-button
                type="primary"
                icon="el-icon-edit"
                circle
                size="mini"
                @click="showEditDialog(scope.row.id)"
              ></el-button>
            </el-tooltip>
            <!-- 分配角色按钮  文字提示-->
            <el-tooltip
              class="item"
              effect="dark"
              content="分配角色"
              placement="top"
              :enterable="false"
            >
              <!-- 分配角色按钮  -->
              <el-button
                type="warning"
                icon="el-icon-setting"
                circle
                size="mini"
              ></el-button>
            </el-tooltip>

            <!-- 删除按钮  文字提示-->
            <el-tooltip
              class="item"
              effect="dark"
              content="删除角色"
              placement="top"
              :enterable="false"
            >
              <!-- 删除按钮 -->
              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                size="mini"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>

    <!-- 添加用户的对话框 -->
    <el-dialog
      title="添加用户"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
    >
      <!-- 内容主体区域 -->
      <el-form
        :model="addForm"
        :rules="addFromRules"
        ref="addFormRef"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="addForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addUser">确定</el-button>
      </span>
    </el-dialog>

    <!-- 修改用户的对话框 -->
    <el-dialog title="修改用户" :visible.sync="editDialogVisible" width="50%">
      <!-- 内容主体区域 -->
      <el-form
        :model="editForm"
        :rules="editFromRules"
        ref="editFormRef"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名">
          <el-input v-model="editForm.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="editForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="editDialogVisible = false"
          >确定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    //验证邮箱的规则 函数
    let checkEmail = (rule, value, cb) => {
      const regEmail = /^([a-zA-Z0-9])+@([a-zA-Z0-9_-])+([a-zA-Z0-9_-])+/
      if (regEmail.test(value)) {
        return cb()
      }
      cb(new Error('请输入合法的邮箱'))
    }
    // 验证手机号
    let checkMabile = (rule, value, cb) => {
      const regMabile = /^(0|86|17951)?(13[0-9]|15[0-9]|17[678]|18[0-9]|14[57])[0-9]{8}$/
      if (regMabile.test(value)) {
        return cb()
      }
      cb(new Error('请输入合法的手机号'))
    }

    return {
      // 获取用户列表的参数对象
      queryInfo: {
        query: '',
        // 当前页数
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 2
      },
      userlist: [],
      total: 0,
      mg_state: true,
      input3: '',
      //控制添加用户对话框的显示与隐藏
      addDialogVisible: false,
      //控制修改用户对话框的显示与隐藏
      editDialogVisible: false,
      //   查询到的用户对象
      editForm: {},
      //添加用户的表单数据
      addForm: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },

      //添加表单的验证规则
      addFromRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: ['blur','change']
          },
          {
            min: 3,
            max: 10,
            message: '用户名的长度在3-10个字符之间',
            trigger: ['blur','change']
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: ['blur','change']
          },
          {
            min: 5,
            max: 15,
            message: '密码的长度在6-15个字符之间',
            trigger:['blur','change']
          }
        ],
        email: [
          {
            required: true,
            message: '请输入邮箱',
            trigger: ['blur','change']
          },
          { validator: checkEmail, trigger: ['blur','change'] }
        ],
        mobile: [
          {
            required: true,
            message: '请输入手机号',
            trigger: ['blur','change']
          },
          { validator: checkMabile, trigger: ['blur','change'] }
        ]
      },
      //修改表单的验证规则
      editFromRules: {
        email: [
          {
            required: true,
            message: '请输入用户的邮箱',
            trigger: ['blur','change']
          },
          { validator: checkEmail, trigger: ['blur','change'] }
        ],
        mobile: [
          {
            required: true,
            message: '请输入手机号',
            trigger: ['blur','change']
          },
          { validator: checkMabile, trigger: ['blur','change'] }
        ]
      }
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    //   获取用户列表数据
    async getUserList() {
      const { data: res } = await this.$http.get('users', {
        params: this.queryInfo
      })
      if (res.meta.status !== 200)
        return this.$message.error('获取用户数据失败')
      this.userlist = res.data.users
      //   总共用户条数
      this.total = res.data.total
      //   this.mg_state=res.data.mg_state
      console.log(res)
    },
    // 监听pagesize改变
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
      this.getUserList()
    },
    //监听页码值改变
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage
      this.getUserList()
    },
    // 监听用户状态开关的改变
    async userStateChanged(userInfo) {
      // 最新状态
      //   console.log(userInfo.mg_state)
      const { data: res } = await this.$http.put(
        `users/${userInfo.id}/state/${userInfo.mg_state}`
      )
      if (res.meta.status !== 200) {
        userInfo.mg_state = !userInfo.mg_state
        return this.$message.error('修改失败')
      } else {
        this.$message.success('更新用户状态成功')
      }
    },
    // 监听添加用户对话框的关闭事件
    addDialogClosed() {
      this.$refs.addFormRef.resetFields()
    },
    // 点击按钮，添加新用户
    addUser() {
      this.$refs.addFormRef.validate(async valid => {
        if (!valid) return
        // 可以发起网络请求
        const { data: res } = await this.$http.post('users', this.addForm)
        console.log(res.meta.status)

        if (res.meta.status !== 201) return this.$message.error('添加用户失败')
        this.$message.success('添加用户成功')
        // 隐藏添加用户的对话框
        this.addDialogVisible = false
        // 刷新列表
        this.getUserList()
      })
    },
    // 展示编辑用户的对话框
    async showEditDialog(id) {  
      const { data: res } = await this.$http.get(`users/${id}`)
      if (res.meta.status !== 200) return this.$message.error('查询失败')
      this.editForm = res.data
      this.editDialogVisible = true
    }
  }
}
</script>
<style lang="less" scoped>
.el-card {
  margin-top: 15px;
  font-size: 12px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !important;
}
.el-input {
  margin-bottom: 15px;
}
.el-table {
  font-size: 12px;
}

.body-style {
  padding: 20px;
}
.el-pagination {
  margin-top: 15px;
}
</style>

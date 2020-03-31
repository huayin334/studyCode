<!--
 * @Author: your name
 * @Date: 2020-03-30 19:37:47
 * @LastEditTime: 2020-03-31 12:02:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /studyCode/vue_shop/src/components/goods/Params.vue
 -->
<!--TODO：代办-->
<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>参数列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 警告提示 -->
      <el-alert
        title="注意：只允许为第三级分类设置相关参数！"
        type="warning"
        :closable="false"
        show-icon
      ></el-alert>
      <!-- 选择商品分类区域 -->
      <el-row class="cat_opt">
        <el-col>
          <span>选择商品分类:</span>
          <el-cascader
            v-model="selectedCateKeys"
            :options="catelist"
            :props="cateProps"
            @change="handleChange"
          ></el-cascader>
        </el-col>
      </el-row>

      <!-- tabs标签页 -->
      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <el-tab-pane label="动态参数" name="many">
          <!-- 添加参数的面板 -->
          <el-button
            type="primary"
            size="mini"
            :disabled="isBtnDisabled"
            @click="addDialogVisible = true"
          >添加参数
          </el-button
          >
          <!-- 动态参数表格 -->
          <el-table :data="manyTableData" border stripe>
            <!-- 展开行 -->
            <el-table-column type="expand"></el-table-column>
            <!-- 索引列 -->
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column
              prop="attr_name"
              label="参数名称"
            ></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  icon="el-icon-edit"
                  type="primary"
                  @click="showEditDialog(scope.row.attr_id)"
                ></el-button>
                <el-button
                  size="mini"
                  icon="el-icon-delete"
                  type="danger"
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="静态属性" name="only">
          <!-- 添加属性的面板 -->
          <el-button
            type="primary"
            size="mini"
            :disabled="isBtnDisabled"
            @click="addDialogVisible = true"
          >添加属性
          </el-button
          >
          <!-- 静态属性表格 -->
          <el-table :data="onlyTableData" border stripe>
            <!-- 展开行 -->
            <el-table-column type="expand"></el-table-column>
            <!-- 索引列 -->
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column
              prop="attr_name"
              label="参数名称"
            ></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  icon="el-icon-edit"
                  type="primary"
                  @click="showEditDialog(scope.row.attr_id)"
                >删除
                </el-button
                >
                <el-button size="mini" icon="el-icon-delete" type="danger"
                >删除
                </el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>

    <!-- 添加参数的对话框-公用一个对话框 -->
    <el-dialog
      :title="'添加' + titleText"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
    >
      <!-- 添加参数的表单 -->
      <el-form
        :model="addForm"
        :rules="addFormRules"
        ref="addFormRef"
        label-width="100px"
      >
        <el-form-item :label="titleText" prop="attr_name">
          <el-input v-model="addForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addParams">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改参数的对话框-公用一个对话框 -->
    <el-dialog
      :title="'修改' + titleText"
      :visible.sync="editDialogVisible"
      width="50%"
      @close="editDialogClosed"
    >
      <!-- 修改参数的表单 -->
      <el-form
        :model="editForm"
        :rules="editFormRules"
        ref="editFormRef"
        label-width="100px"
      >
        <el-form-item :label="titleText" prop="attr_name">
          <el-input v-model="editForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editParams">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        //商品分类列表
        catelist: [],
        //级联选择器的配置对象
        cateProps: {
          value: "cat_id",
          label: "cat_name",
          children: "children",
          expandTrigger: "hover"
        },
        //级联选择器双向绑定的数据
        selectedCateKeys: [],
        //被激活的页签名称
        activeName: "only",
        //动态属性的数据
        manyTableData: [],
        //静态属性的数据
        onlyTableData: [],
        //控制添加动态框的显示与隐藏
        addDialogVisible: false,
        //添加参数的表单数据对象
        addForm: {},
        //添加表单的验证规则对象
        addFormRules: {
          attr_name: [
            {
              required: "true",
              message: "请输入参数",
              trigger: "blur"
            }
          ]
        },
        //控制修改动态框的显示与隐藏
        editDialogVisible: false,
        //修改参数的表单数据对象
        editForm: {},
        //修改表单的验证规则对象
        editFormRules: {
          attr_name: [
            {
              required: "true",
              message: "请输入参数",
              trigger: "blur"
            }
          ]
        }
      };
    },
    created() {
      this.getCateList();
    },
    methods: {
      //获取所有的商品分类
      async getCateList() {
        const {data: res} = await this.$http.get("categories");
        if (res.meta.status !== 200) return this.$message.error("获取失败");
        this.catelist = res.data;
        //console.log(this.catelist)
      },
      // 级联选择框选择项发生变化，会触发这个函数
      handleChange() {
        this.getParamsData();
      },
      // tab页签点击事件的处理函数
      handleTabClick() {
        //   console.log(this.activeName)
        this.getParamsData();
      },
      // 动态和静态属性的表格
      async getParamsData() {
        //  console.log(this.selectedCateKeys)
        // 只允许选择三级分类
        if (this.selectedCateKeys.length !== 3) {
          this.selectedCateKeys = [];
        } else {
          // 根据所选id和当前所处的面板，获取对应的参数
          const {data: res} = await this.$http.get(
            `categories/${this.cateId}/attributes`,
            {
              params: {sel: this.activeName}
            }
          );
          if (res.meta.status !== 200) return this.$message.error("获取失败");
          this.$message.success("获取成功");
          // console.log(res.data)
          // console.log(this.activeName)

          if (this.activeName === "many") {
            this.manyTableData = res.data;
            //   console.log(this.manyTableData)
          } else {
            this.onlyTableData = res.data;
            // console.log(this.onlyTableData)
          }
        }
      },
      // 监听添加对话框的关闭事件
      addDialogClosed() {
        // 重置表单
        this.$refs.addFormRef.resetFields();
      },
      // 确定按钮
      addParams() {
        // 表单的预验证
        this.$refs.addFormRef.validate(async valid => {
          if (!valid) return console.log("失败");
          console.log(this.cateId);
          console.log(this.addForm.attr_name);
          console.log(this.activeName);

          const {data: res} = await this.$http.post(
            `categories/${this.cateId}/attributes`,
            {
              attr_name: this.addForm.attr_name,
              attr_sel: this.activeName
            }
          );
          console.log(res);
          if (res.meta.status !== 201) return this.$message.error("添加参数失败");
          this.$message.success("添加参数成功");
          this.getParamsData();
          this.addDialogVisible = false;
        });
      },

      // 编辑动态或者静态参数
      async showEditDialog(attr_id) {
        this.editDialogVisible = true;
        const {data: res} = await this.$http.get(
          `categories/${this.cateId}/attributes/${attr_id}`,
          {
            attr_name: this.editForm.attr_name,
            attr_sel: this.activeName
          }
        );
        if (res.meta.status !== 200) return this.$message.error("获取失败");
        console.log(res.data.attr_name);
        // 将获取到的数据，展示在表单中
        this.editForm = res.data;
      },
      // 监听编辑参数的对话框的关闭事件
      editDialogClosed() {
        // 重置表单
        this.$refs.editFormRef.resetFields();
      },
      // 点击确定按钮修改参数
      editParams() {
        //  表单的预验证
        this.$refs.editFormRef.validate(async valid => {
          if (!valid) return;
          const {data: res} = await this.$http.put(
            `categories/${this.cateId}/attributes/${this.editForm.attr_id}`,
            {
              attr_name: this.editForm.attr_name,
              attr_sel: this.activeName
            }
          );
          if (res.meta.status !== 200) return this.$message.error("更新失败");
          this.$message.success("更新成功");
          // 刷新表格
          this.getParamsData();
          this.editDialogVisible = true;
        });
      }
    },
    //计算属性
    computed: {
      //如果按钮需要被禁用 返回true
      isBtnDisabled() {
        if (this.selectedCateKeys.length !== 3) {
          return true;
        } else {
          return false;
        }
      },
      //   当前选中的三级分类的id
      cateId() {
        if (this.selectedCateKeys.length === 3) {
          return this.selectedCateKeys[2];
        } else {
          return null;
        }
      },
      // 动态计算标题的文本
      titleText() {
        if (this.activeName === "many") {
          return "动态参数";
        } else {
          return "静态属性";
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .cat_opt {
    margin: 15px 0;

    .el-cascader {
      margin: 0 15px;
      width: 400px;
    }
  }

  .el-table {
    margin-top: 15px;
  }
</style>

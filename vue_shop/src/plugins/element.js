/*
 * @Author: your name
 * @Date: 2020-03-24 14:59:06
 * @LastEditTime: 2020-03-25 16:33:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edite
 * @FilePath: /studyCode/vue_shop/src/plugins/element.js
 */
import Vue from 'vue'
// 按需引入element-ui组件
// 逗号前面不能有空格 后面必须要有空格
import {
  Button,
  Form,
  FormItem,
  Input,
  container,
  header,
  aside,
  main,
  menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog

} from 'element-ui'
// 导入弹框
import {
  Message
} from 'element-ui'
// 在全局中注册这些组件 使他们可用
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input, Message)
Vue.use(container)
Vue.use(header)
Vue.use(aside)
Vue.use(main)
Vue.use(menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Col)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
// 需要挂载 这样 只要使用this.$message就可以获取弹框提示
Vue.prototype.$message = Message

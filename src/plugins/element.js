import Vue from 'vue'
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Icon,
  Loading,
  Menu,
  MenuItem,
  Message,
  MessageBox,
  Scrollbar,
  Submenu,
  Tooltip,
} from 'element-ui'

Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Icon)
Vue.use(Loading.directive)
Vue.use(Menu)
Vue.use(MenuItem)
// when use 'Vue.use()', it will show Message or Messagebox when init the page
Vue.component(Message.name, Message)
Vue.component(MessageBox.name, MessageBox)
// a hidden component, won't be shown in document, please see the issue
Vue.use(Scrollbar)
Vue.use(Submenu)
Vue.use(Tooltip)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

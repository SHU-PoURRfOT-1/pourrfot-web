import Vue from 'vue'
import {
  Backtop,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Dialog,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Form,
  FormItem,
  Icon,
  Input,
  Loading,
  Menu,
  MenuItem,
  Message,
  MessageBox,
  Option,
  PageHeader,
  Pagination,
  Scrollbar,
  Select,
  Submenu,
  Table,
  TableColumn,
  Tag,
  Tooltip,
  Upload,
} from 'element-ui'

Vue.use(Backtop)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Divider)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Loading.directive)
Vue.use(Menu)
Vue.use(MenuItem)
// when use 'Vue.use()', it will show Message or Messagebox when init the page
Vue.component(Message.name, Message)
Vue.component(MessageBox.name, MessageBox)
Vue.use(Option)
Vue.use(PageHeader)
Vue.use(Pagination)
// a hidden component, won't be shown in document, please see the issue
Vue.use(Scrollbar)
Vue.use(Select)
Vue.use(Submenu)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Tooltip)
Vue.use(Upload)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

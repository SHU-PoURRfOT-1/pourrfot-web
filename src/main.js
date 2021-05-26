import store from './store'
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

import 'normalize.css/normalize.css'
import '@/styles/global.scss'
import '@/styles/index.scss' // global css

import './icons' // icon

import 'default-passive-events'

import permission from '@/directive/permission'
Vue.use(permission)
import './permission' // permission control

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

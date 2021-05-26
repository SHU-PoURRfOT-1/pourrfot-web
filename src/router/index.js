import Vue from 'vue'
import VueRouter from 'vue-router'

import { constantRoutes } from './routes'

Vue.use(VueRouter)

// solve 'Avoided redundant navigation to current location'
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const createRouter = () =>
  new VueRouter({
    mode: 'history',
    routes: constantRoutes,
    scrollBehavior: () => ({ y: 0 }),
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

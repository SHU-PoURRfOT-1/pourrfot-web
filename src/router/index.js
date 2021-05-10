import Vue from 'vue'
import VueRouter from 'vue-router'

import constantRoutes from './routes'

Vue.use(VueRouter)

const createRouter = () =>
  new VueRouter({
    mode: 'history',
    routes: constantRoutes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/Redirect/index'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/Login/index'),
    hidden: true,
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard/index'),
        meta: { title: '首页', icon: 'dashboard' },
      },
    ],
  },
  {
    path: '/course',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Course',
        component: () => import('@/views/Course/index'),
        meta: { title: '课程', icon: 'course' },
      },
    ],
  },
  {
    path: '/project',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Project',
        component: () => import('@/views/Project/index'),
        meta: { title: '项目', icon: 'project' },
      },
    ],
  },
  // {
  //   path: '/transaction',
  //   name: 'Transaction',
  //   component: Layout,
  //   meta: { title: 'Transaction', icon: 'transaction' },
  // },
  {
    path: '/file',
    redirect: 'noRedirect',
    component: Layout,
    meta: { title: '文件', icon: 'file' },
    children: [
      {
        path: 'index',
        name: 'List',
        component: () => import('@/views/File/index'),
        meta: { title: '文件列表', icon: 'list' },
      },
      {
        path: 'upload',
        name: 'Upload',
        component: () => import('@/views/Upload/index'),
        meta: { title: '文件上传', icon: 'upload' },
      },
    ],
  },
  // {
  //   path: '/message',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Message',
  //       component: () => import('@/views/Message/index'),
  //       meta: { title: 'Message', icon: 'message' },
  //     },
  //   ],
  // },
  {
    path: '/external-link',
    component: Layout,
    children: [
      {
        path: 'http://1.15.233.201/',
        meta: { title: '论坛', icon: 'link' },
      },
    ],
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
]

export const asyncRoutes = [
  // {
  //   path: '/bbs',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'BBS',
  //       component: () => import('@/views/BBS/index'),
  //       meta: { title: 'BBS', icon: 'bbs', roles: ['admin', 'student'] },
  //     },
  //   ],
  // },
]

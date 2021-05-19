/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
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
        meta: { title: 'Dashboard', icon: 'dashboard' },
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
        meta: { title: 'Course', icon: 'course' },
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
        meta: { title: 'Project', icon: 'project' },
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
    meta: { title: 'File', icon: 'file' },
    children: [
      {
        path: 'index',
        name: 'List',
        component: () => import('@/views/File/index'),
        meta: { title: 'List', icon: 'list' },
      },
      {
        path: 'upload',
        name: 'Upload',
        component: () => import('@/views/Upload/index'),
        meta: { title: 'Upload', icon: 'upload' },
      },
    ],
  },
  {
    path: '/message',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Message',
        component: () => import('@/views/Message/index'),
        meta: { title: 'Message', icon: 'message' },
      },
    ],
  },
  {
    path: '/external-link',
    component: Layout,
    children: [
      {
        path: 'http://1.15.233.201/',
        meta: { title: 'External Link', icon: 'link' },
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

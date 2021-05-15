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
    path: '/management',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Management',
    meta: { title: 'Management', icon: 'management' },
    children: [
      {
        path: 'course',
        name: 'Course',
        redirect: 'noRedirect',
        component: () => import('@/views/Course/index'),
        meta: { title: 'Course', icon: 'course' },
        children: [
          {
            path: 'info',
            name: 'CourseInfo',
            component: () => import('@/views/Course/Info/index'),
            meta: { title: 'Info', icon: 'info' },
          },
          {
            path: 'group',
            name: 'Group',
            component: () => import('@/views/Group/index'),
            meta: { title: 'Group', icon: 'group' },
          },
          {
            path: 'member',
            name: 'Member',
            component: () => import('@/views/Course/Member/index'),
            meta: { title: 'Member', icon: 'member' },
          },
          {
            path: 'grade',
            name: 'Grade',
            component: () => import('@/views/Grade/index'),
            meta: { title: 'Grade', icon: 'grade' },
          },
          {
            path: 'activity',
            name: 'Activity',
            component: () => import('@/views/Activity/index'),
            meta: { title: 'Activity', icon: 'activity' },
          },
          {
            path: 'file',
            name: 'StudentFile',
            component: () => import('@/views/File/index'),
            meta: { title: 'File', icon: 'file' },
          },
        ],
      },
      {
        path: 'project',
        name: 'Project',
        redirect: 'noRedirect',
        component: () => import('@/views/Project/index'),
        meta: { title: 'Project', icon: 'project' },
        children: [
          {
            path: 'info',
            name: 'ProjectInfo',
            component: () => import('@/views/Project/Info/index'),
            meta: { title: 'Info', icon: 'info' },
          },
          {
            path: 'member',
            name: 'ProjectMember',
            component: () => import('@/views/Project/Member/index'),
            meta: { title: 'Member', icon: 'member' },
          },
          {
            path: 'file',
            name: 'ProjectFile',
            component: () => import('@/views/File/index'),
            meta: { title: 'File', icon: 'file' },
          },
        ],
      },
      {
        path: 'transaction',
        name: 'Transaction',
        component: () => import('@/views/Transaction/index'),
        meta: { title: 'Transaction', icon: 'transaction' },
      },
      {
        path: 'file',
        name: 'File',
        component: () => import('@/views/File/index'),
        meta: { title: 'File', icon: 'file' },
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
    path: '/bbs',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'BBS',
        component: () => import('@/views/BBS/index'),
        meta: { title: 'BBS', icon: 'bbs' },
      },
    ],
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://www.baidu.com',
        meta: { title: 'External Link', icon: 'link' },
      },
    ],
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
]

export default constantRoutes

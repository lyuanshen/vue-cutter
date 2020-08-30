import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/Layout'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: 'demo',
      component: () => import('@/views/demo/index'),
      name: 'demo',
    }]
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: 'guide',
      component: () => import('@/views/guide/index'),
      name: 'guide',
    }]
  }
];

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

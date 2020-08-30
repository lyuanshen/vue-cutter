import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/Layout'

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

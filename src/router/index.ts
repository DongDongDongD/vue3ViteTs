import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: false,
      requireAuth: false
    },
    // 暂时先不考虑魔法注释
    component: () => import('@/view/Login/index.vue')
  }
];

const router = createRouter({
  history: createWebHistory(), // 可接受一个base路径参数 默认返回 /
  routes
});

export default router;

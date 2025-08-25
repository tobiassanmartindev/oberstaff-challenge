import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '/users',
          name: 'User Finder',
          component: () => import('../pages/UserFinder.vue'),
        },
      ],
    },
  ],
})

export default router

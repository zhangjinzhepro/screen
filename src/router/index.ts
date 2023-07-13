import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/views/HomeView.vue')
    },
      {
          path: '/sd',
          name: 's',
          component: ()=>import('@/views/shandong.vue')
      },
  ]
})

export default router

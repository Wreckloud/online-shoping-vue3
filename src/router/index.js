import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/Layout/Home/index.vue')
        },
        {
          path: '/categorie/:id',
          component: () => import('@/views/Layout/Categorie/index.vue')
        },
        {
          path: '/categorie/sub/:id',
          component: () => import('@/views/Layout/SubCategory/index.vue')
        },
        {
          path: 'detail/:id',
          component: () => import('@/views/Layout/Detail/index.vue')
        }
      ]
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router

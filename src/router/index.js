import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    // {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
    // },

    {
      path: '/',
      name: 'main',
      component: () => import('../pages/corp.vue'),
    },
    {
      path: '/zavod',
      name: 'zavod',
      component: () => import('../pages/zavod.vue'),
    },
    {
      path: '/realestate',
      name: 'real',
      component: () => import('../pages/real.vue'),
    },
  ],
})

export default router

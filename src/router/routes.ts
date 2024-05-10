import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
    component: () => import('src/layouts/LoginLayout.vue'),
    children: [
      {
        path: '/login',
        component: () => import('src/pages/LoginPage.vue'),
        beforeEnter: (to, from, next) => {
          const accessToken = localStorage.getItem('accessToken')
          if (accessToken) {
            next('/home')
          } else {
            next()
          }
        },
      },
    ],
  },
  {
    path: '/',
    component: () => import('src/layouts/CheckLayout.vue'),
    children: [
      {
        path: 'home',
        component: () => import('src/pages/HomePage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/404Page.vue'),
  },
]
export default routes

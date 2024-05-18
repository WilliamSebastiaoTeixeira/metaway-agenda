import { RouteRecordRaw } from 'vue-router'
import { useAuthorizationStore } from 'src/stores/authorization'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
    component: () => import('src/layouts/Login.vue'),
    children: [
      {
        path: '/login',
        component: () => import('src/pages/Login.vue'),
        beforeEnter: (to, from, next) => {
          const auth = useAuthorizationStore()
          if (auth.accessToken) {
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
    component: () => import('src/layouts/Check.vue'),
    children: [
      {
        path: 'home',
        component: () => import('src/pages/Home.vue'),
      },
      {
        path: 'meu-cadastro',
        component: () => import('src/pages/MeuCadastro.vue'),
      },
      {
        path: 'usuarios',
        component: () => import('src/pages/Usuarios.vue'),
      },
      {
        path: 'pessoas',
        component: () => import('src/pages/Pessoas.vue'),
      },
      {
        path: 'contatos',
        component: () => import('src/pages/Contatos.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/404.vue'),
  },
]
export default routes

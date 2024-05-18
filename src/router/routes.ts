import { RouteRecordRaw } from 'vue-router'
import { useAuthorizationStore } from 'src/stores/authorization'

import LoginLayout from 'src/layouts/Login.vue'
import CheckLayout from 'src/layouts/Check.vue'

import Home from 'src/pages/Home.vue'
import MeuCadastro from 'src/pages/MeuCadastro.vue'
import Usuarios from 'src/pages/Usuarios.vue'
import Pessoas from 'src/pages/Pessoas.vue'
import Contatos from 'src/pages/Contatos.vue'

import Error from 'src/pages/404.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
    component: LoginLayout,
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
    component: CheckLayout,
    children: [
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'meu-cadastro',
        component: () => MeuCadastro,
      },
      {
        path: 'usuarios',
        component: Usuarios,
      },
      {
        path: 'pessoas',
        component: Pessoas,
      },
      {
        path: 'contatos',
        component: Contatos,
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: Error,
  },
]
export default routes

import { defineStore } from 'pinia'
import { computed } from 'vue'

import { useAuthorizationStore } from 'src/stores/authorization'

import { RoleUsuarioEnum } from 'src/types/enum/RoleUsuario'

export interface MenuChildren {
  nome: string
  icon: string
  uri: string
  route: string
  requiredPermission: RoleUsuarioEnum[]
  disabled: boolean
}

export interface MenuFather {
  nome: string
  icon: string
  uri: string
  route: string
  disabled: boolean
  requiredPermission: RoleUsuarioEnum[]
  children: MenuChildren[]
}

export const useMenuStore = defineStore('menu', () => {
  const auth = useAuthorizationStore()

  const menu: MenuFather[] = [
    {
      nome: 'Home',
      icon: 'las la-home',
      uri: 'HOME',
      route: '/home',
      disabled: false,
      requiredPermission: [],
      children: [],
    },
    {
      nome: 'Meu cadastro',
      icon: 'las la-user',
      uri: 'MEU_CADASTRO',
      route: '/meu-cadastro',
      disabled: false,
      requiredPermission: [],
      children: [],
    },
    {
      nome: 'Usuarios',
      icon: 'las la-users',
      uri: 'USUARIOS',
      route: '/usuarios',
      disabled: false,
      requiredPermission: [RoleUsuarioEnum.ROLE_ADMIN],
      children: [],
    },
    {
      nome: 'Pessoas',
      icon: 'las la-user-circle',
      uri: 'PESSOAS',
      route: '/pessoas',
      disabled: false,
      requiredPermission: [],
      children: [],
    },
    {
      nome: 'Contatos',
      icon: 'las la-phone',
      uri: 'CONTATOS',
      route: '/contatos',
      disabled: false,
      requiredPermission: [],
      children: [],
    },
  ]

  const menuComputed = computed(() =>
    menu.map((father) => {
      const disabled =
        father.requiredPermission.length > 0 &&
        !hasPermission(father.requiredPermission)
      const children = father.children.map((child) => ({
        ...child,
        disabled:
          child.requiredPermission.length > 0 &&
          !hasPermission(child.requiredPermission),
      }))
      return { ...father, disabled, children }
    }),
  )

  function hasPermission(permissions: RoleUsuarioEnum[]): boolean {
    return permissions.some((permission) =>
      auth.usuario?.tipos.includes(permission),
    )
  }

  return { menuComputed }
})

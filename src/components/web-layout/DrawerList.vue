<template>
  <q-list v-for="(item, index) in menuComputed" :key="index" padding>
    <q-expansion-item
      clickable
      :default-opened="checkRoute(item.children)"
      :hide-expand-icon="!item.children?.length"
      :active-class="activeClass(index, item.children)"
      :class="classExpand(index, item.children)"
      :to="item.route"
      :disable="item.disabled"
      :icon="item.icon"
      :label="item.nome"
      class="text-white"
    >
      <div v-if="item.children" class="row">
        <q-list
          v-for="(children, indexChildren) in item.children"
          :key="indexChildren"
          class="fit"
        >
          <q-item
            clickable
            active-class="text-grey-1 bg-secondary"
            :to="children.route"
            :disable="children.disabled"
            class="text-white"
            :q-icon="children.icon"
          >
            <q-item-section avatar class="q-pl-lg">
              <q-icon size="20px" :name="children.icon" />
            </q-item-section>

            <q-item-section class="q-pl-lg">
              <span size="20px">
                {{ children.nome }}
              </span>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-expansion-item>
  </q-list>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useAuthorizationStore } from 'src/stores/authorization'

import { RoleUsuarioEnum } from 'src/types/enum/RoleUsuario'

interface Children {
  nome: string
  icon: string
  uri: string
  route: string
  requiredPermission: RoleUsuarioEnum[]
  disabled: boolean
}

interface Father {
  nome: string
  icon: string
  uri: string
  route: string
  disabled: boolean
  requiredPermission: RoleUsuarioEnum[]
  children: Children[]
}

interface Props {
  miniState: boolean
}

const props = defineProps<Props>()

const route = useRoute()
const auth = useAuthorizationStore()

const menu: Father[] = [
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

function classExpand(index: number, itemChildren: Children[]) {
  const marginTop = index === 1 ? 'q-mt-sm' : ''
  const cor =
    itemChildren.length && props.miniState && checkRoute(itemChildren)
      ? 'text-grey-1 bg-secondary'
      : ''
  return `${marginTop} ${cor}`
}

function activeClass(index: number, itemChildren: Children[]) {
  if (!props.miniState && checkRoute(itemChildren)) {
    return 'text-grey-1 bg-secondary'
  }
  return index !== 0 ? 'text-grey-1 bg-secondary' : ''
}

function checkRoute(itemChildren: Children[]) {
  if (!itemChildren.length) return false
  return itemChildren.some((child: Children) =>
    route.fullPath.includes(child.route),
  )
}
</script>

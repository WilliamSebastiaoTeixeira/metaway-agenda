<template>
  <q-list v-for="(item, index) in menu" :key="index" padding>
    <q-expansion-item
      v-if="!item.disabled"
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
import { useRoute } from 'vue-router'

interface Children {
  nome: string
  icon: string
  uri: string
  route: string
  requiredPermission: string[]
  disabled: boolean
}

interface Father {
  nome: string
  icon: string
  uri: string
  route: string
  disabled: boolean
  requiredPermission: string[]
  children: Children[]
}

const props = defineProps({
  miniState: {
    type: Boolean,
    require: true,
  },
})

const route = useRoute()

const menu: Father[] = [
  {
    nome: 'Home',
    icon: 'las la-home',
    uri: 'DASHBOARD',
    route: '/app',
    disabled: false,
    requiredPermission: [],
    children: [],
  },
]

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

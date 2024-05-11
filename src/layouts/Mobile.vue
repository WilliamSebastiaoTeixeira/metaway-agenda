<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white full-width">
      <q-toolbar>
        <div class="row items-center justify-around full-width">
          <div v-for="(item, index) in menuComputed" :key="index">
            <q-btn
              round
              :disable="item.disabled"
              flat
              dense
              :icon="item.icon"
              @click="() => router.push(item.route)"
            />
          </div>
          <div>
            <q-btn
              round
              flat
              dense
              icon="las la-sign-out-alt"
              @click="onLogout"
            />
          </div>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useMenuStore } from 'src/stores/menu'
import { useAuthorizationStore } from 'src/stores/authorization'

const router = useRouter()
const menuStore = useMenuStore()
const auth = useAuthorizationStore()

const { menuComputed } = storeToRefs(menuStore)

async function onLogout() {
  auth.logout()
  router.push('/')
}
</script>

<style scoped lang="scss">
.q-layout-padding {
  padding: 5px;
}
</style>

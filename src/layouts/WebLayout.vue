<template>
  <q-layout view="lHh Lpr lFf" class="app-menu-height">
    <Header />

    <Drawer />

    <q-page-container class="app-bg-color absolute-full">
      <div class="fit scroll">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import { useGeneralStore } from 'src/stores/general'

import Header from 'src/components/web-layout/Header.vue'
import Drawer from 'src/components/web-layout/Drawer.vue'

const generalStore = useGeneralStore()
const { general } = storeToRefs(generalStore)

const container = computed(() => (general.value.fullWidth ? '100%' : '1100px'))
</script>

<style scoped lang="scss">
.container {
  max-width: v-bind(container) !important;
}
</style>

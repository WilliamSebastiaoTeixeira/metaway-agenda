<template>
  <q-drawer
    v-model="general.miniState"
    show-if-above
    :mini="general.miniState"
    :width="250"
    :breakpoint="599"
    bordered
    class="bg-primary text-white"
    @mouseover="() => (general.miniState = false)"
    @mouseout="() => (general.miniState = false)"
  >
    <q-scroll-area class="fit">
      <DrawerList :mini-state="general.miniState" />
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useGeneralStore } from 'src/stores/general'

import DrawerList from './DrawerList.vue'

const generalStore = useGeneralStore()
const { general } = storeToRefs(generalStore)
</script>

<style scoped lang="scss"></style>

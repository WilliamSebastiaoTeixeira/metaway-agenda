<template>
  <q-drawer
    show-if-above
    :mini="miniState"
    :width="250"
    :breakpoint="599"
    bordered
    class="bg-primary text-white"
    @mouseover="onMouseMinistate(false)"
    @mouseout="onMouseMinistate(true)"
  >
    <q-scroll-area class="fit">
      <DrawerList :mini-state="miniState" />
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import { useGeneralStore } from 'src/stores/general'

import DrawerList from './DrawerList.vue'

const generalStore = useGeneralStore()
const { general } = storeToRefs(generalStore)

const miniState = ref(false)

function onMouseMinistate(event: boolean) {
  if (!general.value.flexibleDrawer) return
  miniState.value = event
}

watch(
  () => [general.value.flexibleDrawer],
  () => {
    miniState.value = general.value.flexibleDrawer
  },
)

onMounted(() => {
  miniState.value = general.value.flexibleDrawer
})
</script>

<style scoped lang="scss"></style>

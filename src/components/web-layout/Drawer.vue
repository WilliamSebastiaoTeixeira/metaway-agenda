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
    <div class="column no-wrap justify-around" style="height: 100%">
      <q-scroll-area class="column justify-between fit">
        <DrawerList :mini-state="miniState" />
      </q-scroll-area>

      <q-list padding>
        <q-item clickable class="text-white" @click="onLogout">
          <q-item-section avatar class="">
            <q-icon size="20px" name="las la-sign-out-alt" />
          </q-item-section>

          <q-item-section>
            <span size="20px"> Sair </span>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-drawer>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

import { useGeneralStore } from 'src/stores/general'
import { useAuthorizationStore } from 'src/stores/authorization'

import DrawerList from './DrawerList.vue'

const router = useRouter()

const generalStore = useGeneralStore()
const { general } = storeToRefs(generalStore)

const auth = useAuthorizationStore()

const miniState = ref(false)

function onMouseMinistate(event: boolean) {
  if (!general.value.flexibleDrawer) return
  miniState.value = event
}

async function onLogout() {
  auth.logout()
  router.push('/')
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

<template>
  <q-menu fit anchor="bottom left" self="top left">
    <q-item clickable @click="() => (general.fullWidth = !general.fullWidth)">
      <q-item-section avatar>
        <q-avatar>
          <q-icon
            color="grey-6"
            :name="
              !general.fullWidth ? 'las la-plus-circle' : 'las la-minus-circle'
            "
          />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <div class="row">
          <span class="text-grey-6 text-bold">
            {{ !general.fullWidth ? 'Expandir conteúdo' : 'Retrair conteúdo' }}
          </span>
        </div>
      </q-item-section>
    </q-item>

    <q-item clickable @click="() => (general.fullWidth = !general.fullWidth)">
      <q-item-section avatar>
        <q-avatar>
          <q-icon color="grey-6" name="apps" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <div class="row">
          <span class="text-grey-6 text-bold">
            {{ !general.miniState ? 'Drawer aberto' : 'Drawer flexível' }}
          </span>
        </div>
      </q-item-section>
    </q-item>

    <q-item clickable @click="onLogout">
      <q-item-section avatar>
        <q-avatar>
          <q-icon color="grey-6" name="las la-sign-out-alt" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <span class="text-grey-6 text-bold"> Sair </span>
      </q-item-section>
    </q-item>
  </q-menu>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useGeneralStore } from 'src/stores/general'
import { useAuthenticationStore } from 'src/stores/authentication'

const router = useRouter()
const auth = useAuthenticationStore()
const generalStore = useGeneralStore()
const { general } = storeToRefs(generalStore)

async function onLogout() {
  auth.logout()
  router.push('/')
}
</script>

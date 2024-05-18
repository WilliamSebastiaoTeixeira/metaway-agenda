<template>
  <q-page padding class="container">
    <div class="row justify-start q-mb-md">
      <span class="text-h6 text-bold text-grey-9">Usuarios</span>
    </div>

    <div class="row justify-between q-mb-md">
      <q-input v-model="filter.termo" label="Termo" outlined dense />

      <q-btn
        color="secondary"
        unelevated
        no-caps
        label="Novo"
        @click="showDialog(undefined)"
      />
    </div>

    <Table v-model="usuarios" :loading="loading" @editar="showDialog" />
  </q-page>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, watch } from 'vue'
import { useQuasar } from 'quasar'
import { debounce } from 'lodash'

import api from 'src/api'

import type { Usuario } from 'src/types/usuario'
import type { UsuarioPesquisarRequest } from 'src/api/usuario'

import Table from 'src/components/usuario/table/Component.vue'
import Dialog from 'src/components/usuario/dialog/Component.vue'

const $q = useQuasar()
const usuarios = ref<Usuario[]>([])
const loading = ref(false)

const filter: UsuarioPesquisarRequest = reactive({
  termo: '',
})

async function load() {
  try {
    loading.value = true
    const data = await api.usuario.pesquisar.post(filter)
    usuarios.value = data
  } finally {
    loading.value = false
  }
}

function showDialog(usuario: Usuario | undefined) {
  $q.dialog({
    component: Dialog,
    componentProps: {
      usuario,
    },
  }).onOk(() => {
    load()
  })
}

onMounted(async () => {
  await load()
  watch(filter, debounce(load, 500))
})
</script>

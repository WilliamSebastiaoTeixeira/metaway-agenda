<template>
  <q-page padding class="container">
    <div class="row justify-start q-mb-md">
      <span class="text-h6 text-bold text-grey-9">Contatos</span>
    </div>

    <div class="row justify-between q-mb-md">
      <q-input v-model="filter.termo" label="Termo" outlined dense />

      <q-btn color="secondary" unelevated no-caps label="Novo" />
    </div>

    {{ contatos }}

    <!--<Table v-model="pessoas" :loading="loading" @editar="showDialog" />-->
  </q-page>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, watch } from 'vue'
//import { useQuasar } from 'quasar'
import { debounce } from 'lodash'

import api from 'src/api'

import type { Contato } from 'src/types/contato'
import type { ContatoPesquisarRequest } from 'src/api/contato'

//import Table from 'src/components/pessoa/table/Index.vue'
//import Dialog from 'src/components/pessoa/dialog/Index.vue'

//const $q = useQuasar()

const contatos = ref<Contato[]>()
const loading = ref(false)

const filter: ContatoPesquisarRequest = reactive({
  termo: '',
})

/*
function showDialog(pessoa: Pessoa | undefined) {
  $q.dialog({
    component: Dialog,
    componentProps: {
      pessoa,
    },
  }).onOk(() => {
    load()
  })
}
*/

async function load() {
  try {
    loading.value = true
    const data = await api.contato.pesquisar.post(filter)
    contatos.value = data
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await load()
  watch(filter, debounce(load, 500))
})
</script>

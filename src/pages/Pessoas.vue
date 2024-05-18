<template>
  <q-page padding class="container">
    <div class="row justify-start q-mb-md">
      <span class="text-h6 text-bold text-grey-9">Pessoas</span>
    </div>

    <div class="row justify-between q-mb-md">
      <q-input v-model="filter.nome" label="Nome" outlined dense />

      <q-btn
        color="secondary"
        unelevated
        no-caps
        label="Novo"
        @click="showDialog(undefined)"
      />
    </div>

    <Table v-model="pessoas" :loading="loading" @editar="showDialog" />
  </q-page>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, watch } from 'vue'
import { useQuasar } from 'quasar'
import { debounce } from 'lodash'

import api from 'src/api'

import type { Pessoa } from 'src/types/pessoa'
import type { PessoaPesquisarResquest } from 'src/api/pessoa'

import Table from 'src/components/pessoa/table/Index.vue'
import Dialog from 'src/components/pessoa/dialog/Index.vue'

const $q = useQuasar()

const pessoas = ref<Pessoa[]>()
const loading = ref(false)

const filter: PessoaPesquisarResquest = reactive({
  nome: '',
})

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

async function load() {
  try {
    loading.value = true
    const data = await api.pessoa.pesquisar.post(filter)
    pessoas.value = data
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await load()
  watch(filter, debounce(load, 500))
})
</script>

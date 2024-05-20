<template>
  <q-page padding class="container">
    <div class="row justify-start q-mb-md">
      <span class="text-h6 text-bold text-grey-9">Contatos</span>
    </div>

    <div class="row justify-between q-mb-md">
      <q-input v-model="filter.termo" label="Pesquisar" outlined dense />

      <q-btn
        color="secondary"
        unelevated
        no-caps
        label="Novo"
        @click="showDialog(undefined)"
      />
    </div>

    <Table
      v-model="contatos"
      :loading="loading"
      @editar="showDialog"
      @remover="removeDialog"
    />
  </q-page>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, watch } from 'vue'
import { useQuasar, Notify } from 'quasar'
import { debounce } from 'lodash'

import api from 'src/api'
import { useAuthorizationStore } from 'src/stores/authorization'

import type { Contato } from 'src/types/contato'
import type { ContatoPesquisarRequest } from 'src/api/contato'

import Table from 'src/components/contato/table/Index.vue'
import Dialog from 'src/components/contato/dialog/Index.vue'

const $q = useQuasar()
const auth = useAuthorizationStore()

const contatos = ref<Contato[]>()
const loading = ref(false)

const filter: ContatoPesquisarRequest = reactive({
  termo: '',
})

function showDialog(contato: Contato | undefined) {
  $q.dialog({
    component: Dialog,
    componentProps: {
      contato,
    },
  }).onOk(() => {
    load()
  })
}

async function removeDialog(contato: Contato) {
  $q.dialog({
    title: 'Confirmar',
    message: 'Você tem certeza que deseja remover?',
    ok: {
      label: 'Remover',
      color: 'negative',
      unelevated: true,
      'no-caps': true,
    },
    cancel: {
      label: 'Cancelar',
      color: 'blue',
      flat: true,
      'no-caps': true,
    },
  }).onOk(async () => {
    try {
      await api.contato.remover.delete(contato.id)

      Notify.create({
        message: 'Contato removido com sucesso',
        position: 'bottom',
        type: 'positive',
      })

      contatos.value = contatos.value?.filter(
        (contatoFilter) => contatoFilter.id !== contato.id,
      )
    } catch (e) {}
  })
}

async function load() {
  try {
    loading.value = true
    const data = await api.contato.pesquisar.post(filter)
    contatos.value = data.filter((contato) => {
      return contato.usuario?.id === auth.usuario?.id
    })
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await load()
  watch(filter, debounce(load, 500))
})
</script>

<template>
  <q-dialog
    ref="dialogRef"
    :maximized="mobileOrSmallWidth"
    @hide="onDialogHide"
  >
    <q-card style="width: 100%; max-width: 600px">
      <div>
        <q-card-section class="q-px-lg">
          <div class="row items-center justify-between">
            <div class="row items-baseline q-gutter-x-sm">
              <span class="text-h6 text-bold text-grey-9">
                {{ `${isEditing ? 'Editar' : 'Nova'} pessoa` }}
              </span>
            </div>
            <q-btn v-close-popup icon="la la-close" flat round color="grey-8" />
          </div>
        </q-card-section>

        <q-separator />

        <q-card class="q-mt-md q-px-md q-pb-md" flat> {{ pessoaForm }} </q-card>
      </div>

      <q-card-section>
        <div class="row justify-end q-gutter-x-md">
          <q-btn v-close-popup no-caps flat class="text-blue-6">
            <span class="estoque-subtitle-size">Cancelar</span>
          </q-btn>
          <q-btn
            no-caps
            unelevated
            color="secondary"
            :loading="loading"
            :disable="!valid"
            @click="save"
          >
            Salvar
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { ref, onMounted, computed, reactive } from 'vue'
import { useDialogPluginComponent, Notify } from 'quasar'
import { useGeneralStore } from 'src/stores/general'
import { storeToRefs } from 'pinia'

//import api from 'src/api'

import type { Pessoa } from 'src/types/pessoa'

interface Props {
  pessoa?: Pessoa
}

const props = defineProps<Props>()

defineEmits(useDialogPluginComponent.emits)
const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()

const generalStore = useGeneralStore()
const { mobileOrSmallWidth } = storeToRefs(generalStore)

const loading = ref(false)

const pessoaForm: Pessoa = reactive({
  cpf: '',
  endereco: {
    bairro: '',
    cep: '',
    cidade: '',
    estado: '',
    id: 0,
    logradouro: '',
    numero: 0,
    pais: '',
  },
  foto: null,
  id: 0,
  nome: '',
})

const isEditing = computed(() => !!props.pessoa)

const valid = computed(() => {
  return true
})

async function save() {
  try {
    loading.value = true

    Notify.create({
      message: 'Usuario criado com sucesso',
      position: 'bottom',
      type: 'positive',
    })
  } finally {
    loading.value = false
    onDialogOK()
  }
}

async function load() {
  if (!props.pessoa) return
  Object.assign(pessoaForm, props.pessoa)
}

onMounted(load)
</script>
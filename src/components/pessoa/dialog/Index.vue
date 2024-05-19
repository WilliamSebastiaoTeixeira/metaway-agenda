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

        <q-card class="q-mt-md q-px-md q-pb-md" flat>
          <div class="row justify-around items-center q-mb-md">
            <div
              v-if="pessoaForm?.foto || newFotoUrl"
              style="position: relative"
            >
              <Foto
                :id="pessoaForm.id"
                style="height: 150px; width: 150px"
                :foto="pessoaForm.foto"
                :url="newFotoUrl"
              />

              <q-btn
                color="negative"
                dense
                round
                unelevated
                no-caps
                icon="las la-times-circle"
                style="position: absolute; right: -17px; top: 0"
                @click="exluirFoto"
              />
            </div>

            <q-file v-model="file" outlined label="Selecionar imagem" />
          </div>
          <PessoaForm ref="pessoaFormRef" v-model="pessoaForm" />
          <EnderecoForm ref="enderecoFormRef" v-model="pessoaForm.endereco" />
        </q-card>
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
import { ref, onMounted, computed, reactive, watch } from 'vue'
import { useDialogPluginComponent, Notify } from 'quasar'
import { useGeneralStore } from 'src/stores/general'
import { storeToRefs } from 'pinia'
import { cloneDeep } from 'lodash'

import api from 'src/api'

import type { Pessoa } from 'src/types/pessoa'
import type { PessoaSalvarRequest } from 'src/api/pessoa'

import PessoaForm from 'src/components/pessoa/form/pessoa/Index.vue'
import EnderecoForm from 'src/components/pessoa/form/endereco/Index.vue'
import Foto from 'src/components/generic/foto/Index.vue'

interface Props {
  pessoa?: Pessoa
}

const props = defineProps<Props>()

defineEmits(useDialogPluginComponent.emits)
const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()

const generalStore = useGeneralStore()
const { mobileOrSmallWidth } = storeToRefs(generalStore)

const pessoaFormRef = ref()
const enderecoFormRef = ref()
const loading = ref(false)
const newFotoUrl = ref()
const file = ref()

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
  return !!pessoaFormRef.value?.valid && !!enderecoFormRef.value?.valid
})

async function save() {
  try {
    loading.value = true

    const salvarResquest: PessoaSalvarRequest = cloneDeep(pessoaForm)

    if (!isEditing.value) {
      delete salvarResquest.id
      delete salvarResquest.endereco.id
    }

    const data = await api.pessoa.salvar.post(salvarResquest)

    if (file.value) {
      await api.foto.upload.post(data.object.id, file.value)
    }

    if (isEditing.value) {
      Notify.create({
        message: 'Pessoa atualizada com sucesso',
        position: 'bottom',
        type: 'positive',
      })
    } else {
      Notify.create({
        message: 'Pessoa criada com sucesso',
        position: 'bottom',
        type: 'positive',
      })
    }
  } finally {
    loading.value = false
    onDialogOK()
  }
}

async function load() {
  if (!props.pessoa) return
  Object.assign(pessoaForm, props.pessoa)
}

async function exluirFoto() {
  file.value = undefined
  newFotoUrl.value = undefined
  pessoaForm.foto = null
}

onMounted(load)

watch(file, () => {
  if (!file.value) return
  const reader = new FileReader()
  reader.onloadend = () => {
    newFotoUrl.value = reader.result
  }
  reader.readAsDataURL(file.value)
})
</script>

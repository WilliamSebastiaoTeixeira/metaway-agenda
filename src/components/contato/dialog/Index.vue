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
                {{ `${isEditing ? 'Editar' : 'Novo'} contato` }}
              </span>
            </div>
            <q-btn v-close-popup icon="la la-close" flat round color="grey-8" />
          </div>
        </q-card-section>

        <q-separator />

        <q-card class="q-mt-md q-px-md q-pb-md" flat>
          <ContatoForm ref="contatoFormRef" v-model="contatoForm" />
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
import { ref, onMounted, computed, reactive } from 'vue'
import { useDialogPluginComponent } from 'quasar'
import { useGeneralStore } from 'src/stores/general'
import { storeToRefs } from 'pinia'
import { cloneDeep } from 'lodash'

//import api from 'src/api'

import type { Contato } from 'src/types/contato'
import type { ContatoSalvarRequest } from 'src/api/contato'
import { TipoContatoEnum } from 'src/types/enum/tipoContato'

import ContatoForm from 'src/components/contato/form/Index.vue'

interface Props {
  contato?: Contato
}

const props = defineProps<Props>()

defineEmits(useDialogPluginComponent.emits)
const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()

const generalStore = useGeneralStore()
const { mobileOrSmallWidth } = storeToRefs(generalStore)

const contatoFormRef = ref()
const loading = ref(false)

const contatoForm: Contato = reactive({
  email: '',
  id: 0,
  pessoa: null,
  privado: false,
  tag: '',
  telefone: '',
  tipoContato: TipoContatoEnum.TELEFONE,
  usuario: null,
})

const isEditing = computed(() => !!props.contato)

const valid = computed(() => {
  return !!contatoFormRef.value?.valid
})

async function save() {
  try {
    loading.value = true

    const salvarResquest: ContatoSalvarRequest = cloneDeep(contatoForm)

    if (!isEditing.value) {
      delete salvarResquest.id
    }

    console.log(salvarResquest)

    /*

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
    */
  } finally {
    loading.value = false
    onDialogOK()
  }
}

async function load() {
  if (!props.contato) return
  Object.assign(contatoForm, cloneDeep(props.contato))
}

onMounted(load)
</script>

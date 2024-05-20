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
                {{ `${isEditing ? 'Editar' : 'Novo'} usuario` }}
              </span>
            </div>
            <q-btn v-close-popup icon="la la-close" flat round color="grey-8" />
          </div>
        </q-card-section>

        <q-separator />

        <q-card class="q-mt-md q-px-md q-pb-md" flat>
          <UsuarioForm ref="usuarioFormRef" v-model="usuarioForm" />

          <div class="column">
            <q-select
              v-model="tipos"
              outlined
              map-options
              emit-value
              multiple
              dense
              label="Tipos de usuário"
              :options="optionsTipos"
              :rules="[
                () =>
                  tiposValid || 'É necessário selecionar o papel do usuario',
              ]"
            />
          </div>

          <div class="column">
            <q-input
              v-model="password"
              label="Senha"
              :type="isPassword ? 'password' : 'text'"
              lazy-rules
              dense
              outlined
              :rules="[
                () => !v$.password.required.$invalid || 'Campo obrigatório',
                () =>
                  !v$.password.minLength.$invalid ||
                  'Tamanho mínimo de 8 caracteres',
                () =>
                  !v$.password.lettersAndNumbers.$invalid ||
                  'Precisa conter letras e números',
              ]"
            >
              <template #append>
                <q-icon
                  :name="isPassword ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPassword = !isPassword"
                />
              </template>
            </q-input>
          </div>
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
import { ref, onMounted, reactive, computed } from 'vue'
import { useDialogPluginComponent, Notify } from 'quasar'
import useVuelidate from '@vuelidate/core'
import { requiredIf, minLength } from '@vuelidate/validators'
import { useGeneralStore } from 'src/stores/general'
import { storeToRefs } from 'pinia'

import api from 'src/api'

import type { Usuario } from 'src/types/usuario'
import type { UsuarioSalvarResquest } from 'src/api/usuario'

import { RoleUsuarioEnum } from 'src/types/enum/roleUsuario'

import UsuarioForm from 'src/components/usuario/form/usuario/Index.vue'

interface Props {
  usuario?: Usuario
}

const props = defineProps<Props>()

defineEmits(useDialogPluginComponent.emits)
const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()

const optionsTipos = [
  { label: 'Administrador', value: RoleUsuarioEnum.ROLE_ADMIN },
  { label: 'Usuario', value: RoleUsuarioEnum.ROLE_USER },
]

const generalStore = useGeneralStore()
const { mobileOrSmallWidth } = storeToRefs(generalStore)

const password = ref('')
const isPassword = ref(true)
const usuarioFormRef = ref()

const loading = ref(false)
const tipos = ref<RoleUsuarioEnum[]>([RoleUsuarioEnum.ROLE_USER])

const usuarioForm: Usuario = reactive({
  cpf: '',
  dataNascimento: '',
  email: '',
  id: 0,
  nome: '',
  password: '',
  telefone: '',
  username: '',
})

const isEditing = computed(() => !!props.usuario)

const tiposValid = computed(() => !!tipos.value.length)

const form = computed(() => ({
  password: password.value,
}))

const rules = computed(() => ({
  password: {
    required: requiredIf(() => !isEditing.value),
    minLength: minLength(8),
    lettersAndNumbers: () => checkPasswordStrength(password.value.trim()),
  },
}))

const v$ = useVuelidate(rules, form)

const valid = computed(() => {
  return !!usuarioFormRef.value?.valid && tiposValid.value && !v$.value.$invalid
})

function checkPasswordStrength(password: string | undefined) {
  if (!password) return true
  const regex = /(?=.*[0-9])(?=.*[A-Za-z])/
  return regex.test(password)
}

async function save() {
  try {
    loading.value = true

    const salvarResquest: UsuarioSalvarResquest = {
      tipos: tipos.value,
      usuario: usuarioForm,
    }

    if (password.value.trim()) {
      salvarResquest.usuario.password = password.value
    }

    if (!isEditing.value) {
      delete salvarResquest.usuario.id
    }

    await api.usuario.salvar.post(salvarResquest)

    if (isEditing.value) {
      Notify.create({
        message: 'Usuario atualizado com sucesso',
        position: 'bottom',
        type: 'positive',
      })
    } else {
      Notify.create({
        message: 'Usuario criado com sucesso',
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
  if (!props.usuario) return
  const data = await api.usuario.buscar.get(props.usuario.id)
  tipos.value = data.object.tipos
  Object.assign(usuarioForm, data.object.usuario)
}

onMounted(load)
</script>

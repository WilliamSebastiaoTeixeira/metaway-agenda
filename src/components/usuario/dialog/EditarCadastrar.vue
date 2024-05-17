<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card style="width: 100%; max-width: 600px">
      <div>
        <q-card-section class="q-px-lg">
          <div class="row items-center justify-between">
            <div class="row items-baseline q-gutter-x-sm">
              <span class="text-h6 text-bold text-grey-9">
                {{ `${usuario ? 'Editar' : 'Novo'} usuario` }}
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
              label="Tipos"
              :options="optionsTipos"
              :rules="[
                () =>
                  tiposValid || 'É necessrário selecionar o papel do usuario',
              ]"
            />
          </div>

          <PasswordForm
            ref="passwordFormRef"
            v-model="newPassword"
            :required="!isEditing"
          />
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

import api from 'src/api'

import type { Usuario } from 'src/types/usuario'
import type { UsuarioAlterarSenhaRequest } from 'src/api/usuario'
import type { UsuarioSalvarResquest } from 'src/api/usuario'

import { RoleUsuarioEnum } from 'src/types/enum/roleUsuario'

import UsuarioForm from 'src/components/usuario/form/usuario/Index.vue'
import PasswordForm from 'src/components/usuario/form/password/Index.vue'

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

const usuarioFormRef = ref()
const passwordFormRef = ref()

const loading = ref(false)
const newPassword = ref()
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

const passwordForm = computed<UsuarioAlterarSenhaRequest>(() => {
  return {
    newPassword: newPassword.value,
    password: usuarioForm.password,
    username: usuarioForm.username,
  }
})

const tiposValid = computed(() => !!tipos.value.length)

const valid = computed(() => {
  return (
    !!usuarioFormRef.value?.valid &&
    !!passwordFormRef.value?.valid &&
    tiposValid.value
  )
})

const isEditing = computed(() => !!props.usuario)

async function save() {
  try {
    loading.value = true
    if (isEditing.value) {
      const salvarResquest = {
        tipos: tipos.value,
        usuario: usuarioForm,
      }

      await api.usuario.salvar.post(salvarResquest)

      if (passwordForm.value.newPassword) {
        await api.usuario.alterarSenha.post(passwordForm.value)
      }
    } else {
      const salvarResquest: UsuarioSalvarResquest = {
        tipos: tipos.value,
        usuario: {
          ...usuarioForm,
          password: newPassword.value,
        },
      }

      delete salvarResquest.usuario.id

      await api.usuario.salvar.post(salvarResquest)
    }
  } finally {
    loading.value = false

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

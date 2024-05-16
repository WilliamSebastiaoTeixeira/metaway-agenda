<template>
  <q-page padding class="container">
    <UsuarioForm ref="usuarioFormRef" v-model="usuarioForm" />
    <PasswordForm ref="passwordFormRef" v-model="newPassword" />
    <div class="row justify-end">
      <q-btn
        no-caps
        unelevated
        color="primary"
        label="Salvar"
        :disable="!valid"
        @click="onSave"
      />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { Notify } from 'quasar'
import { reactive, onMounted, computed, ref } from 'vue'

import { useAuthorizationStore } from 'src/stores/authorization'

import api from 'src/api'

import type { Usuario } from 'src/types/usuario'
import type { UsuarioAlterarSenhaRequest } from 'src/api/usuario'

import UsuarioForm from 'src/components/usuario-form/UsuarioForm.vue'
import PasswordForm from 'src/components/password-form/PasswordForm.vue'

const auth = useAuthorizationStore()

const usuarioFormRef = ref()
const passwordFormRef = ref()

const newPassword = ref('')

const usuarioLogado = computed(() => auth.usuario)

const valid = computed(() => {
  return !!usuarioFormRef.value?.valid && !!passwordFormRef.value?.valid
})

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

async function setUsuario() {
  if (!usuarioLogado.value) return
  const { object } = await api.usuario.buscar.get(usuarioLogado.value.id)
  Object.assign(usuarioForm, object.usuario)
}

async function onSave() {
  try {
    await api.usuario.atualizar.put(usuarioForm)
    if (passwordForm.value.newPassword) {
      await api.usuario.alterarSenha.post(passwordForm.value)
    }
  } finally {
    Notify.create({
      message: 'Usuario atualizado com sucesso',
      position: 'bottom',
      type: 'positive',
    })
  }
}

onMounted(setUsuario)
</script>

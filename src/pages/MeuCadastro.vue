<template>
  {{ passwordForm }}
  {{ passwordFormRef }}
  <q-page padding class="container">
    <Form ref="formRef" v-model="form" />
    <PasswordForm ref="passwordFormRef" v-model="newPassword" />
  </q-page>
</template>
<script setup lang="ts">
import { reactive, onMounted, computed, ref } from 'vue'

import { useAuthorizationStore } from 'src/stores/authorization'

import api from 'src/api'

import type { Usuario } from 'src/types/usuario'
import type { UsuarioAlterarSenhaRequest } from 'src/api/usuario'

import Form from 'src/components/meu-cadastro/form/Form.vue'
import PasswordForm from 'src/components/meu-cadastro/password-form/PasswordForm.vue'

const auth = useAuthorizationStore()

const formRef = ref()
const passwordFormRef = ref()

const newPassword = ref('')

const usuarioLogado = computed(() => auth.usuario)

const form: Usuario = reactive({
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
    password: form.password,
    username: form.username,
  }
})

async function setUsuario() {
  if (!usuarioLogado.value) return
  const { object } = await api.usuario.buscar.get(usuarioLogado.value.id)
  Object.assign(form, object.usuario)
}

onMounted(setUsuario)
</script>

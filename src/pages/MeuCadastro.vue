<template>
  <q-page padding class="container">
    <div class="row justify-start q-mb-md">
      <span class="text-h6 text-bold text-grey-9">Meu Cadastro</span>
    </div>

    <UsuarioForm ref="usuarioFormRef" v-model="usuarioForm" />

    <PasswordForm ref="passwordFormRef" v-model="passwordForm" />

    <div class="row justify-end">
      <q-btn
        no-caps
        unelevated
        color="secondary"
        label="Salvar"
        :disable="!valid"
        :loading="loading"
        @click="save"
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

import UsuarioForm from 'src/components/usuario/form/usuario/Index.vue'
import PasswordForm from 'src/components/usuario/form/password/Index.vue'

const auth = useAuthorizationStore()

const usuarioFormRef = ref()
const passwordFormRef = ref()

const loading = ref(false)

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

const passwordForm = reactive({
  password: '',
  newPassword: '',
})

async function load() {
  if (!usuarioLogado.value) return
  const { object } = await api.usuario.buscar.get(usuarioLogado.value.id)
  Object.assign(usuarioForm, object.usuario)
}

async function save() {
  try {
    loading.value = true
    await api.usuario.atualizar.put(usuarioForm)

    if (usuarioLogado.value) {
      auth.setUsuario({
        ...usuarioLogado.value,
        username: usuarioForm.username,
      })
    }

    if (passwordForm.password && passwordForm.newPassword) {
      await api.usuario.alterarSenha.post({
        newPassword: passwordForm.newPassword,
        password: passwordForm.password,
        username: usuarioForm.username,
      })
    }

    Notify.create({
      message: 'Usuario atualizado com sucesso',
      position: 'bottom',
      type: 'positive',
    })
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>

<template>
  <q-page padding class="container q-gutter-y-md">
    {{ formRef?.valid }}
    <Form ref="formRef" v-model="form" />
  </q-page>
</template>
<script setup lang="ts">
import { reactive, onMounted, computed, ref } from 'vue'

import { useAuthorizationStore } from 'src/stores/authorization'

import api from 'src/api'

import type { Usuario } from 'src/types/usuario'

import Form from 'src/components/meu-cadastro/form/Form.vue'

const auth = useAuthorizationStore()

const formRef = ref()

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

async function setUsuario() {
  if (!usuarioLogado.value) return
  const { object } = await api.usuario.buscar.get(usuarioLogado.value.id)
  Object.assign(form, object.usuario)
}

onMounted(setUsuario)
</script>

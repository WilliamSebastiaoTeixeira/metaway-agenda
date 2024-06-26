<template>
  <q-page class="app-background q-pa-md">
    <div
      class="bg-white q-pa-lg column"
      style="min-width: 200px; max-width: 400px; width: 100%"
    >
      <div class="flex justify-start">
        <span class="text-h5 q-mb-md text-primary text-bold"> Entrar </span>
      </div>
      <q-form class="q-gutter-y-sm">
        <q-input
          v-model="form.username"
          outlined
          placeholder="Usuario"
          dense
          autocorrect="on"
          autocapitalize="on"
          autocomplete="username"
          bg-color="white"
          :rules="[
            () => !v$.username.required.$invalid || 'O usuário é obrigatório.',
          ]"
          @keydown.enter.prevent="onLogin"
        />
        <q-input
          v-model="form.password"
          outlined
          placeholder="Senha"
          :type="mostrarSenha ? 'text' : 'password'"
          dense
          autocorrect="on"
          autocapitalize="on"
          autocomplete="current-password"
          bg-color="white"
          :rules="[
            () => !v$.password.required.$invalid || 'A senha é obrigatória.',
            () =>
              !v$.password.minLength.$invalid ||
              'A senha deve ter no mínimo 8 caracteres.',
          ]"
          @keydown.enter.prevent="onLogin"
        >
          <template #append>
            <q-icon
              :name="!mostrarSenha ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="mostrarSenha = !mostrarSenha"
            />
          </template>
        </q-input>

        <q-btn
          color="primary"
          label="Entrar"
          unelevated
          class="full-width"
          :disable="v$.$invalid"
          @click="onLogin"
        />
      </q-form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import api from 'src/api'

import { useAuthorizationStore } from 'src/stores/authorization'

import { LoginRequest } from 'src/api/autorizacao'

const router = useRouter()
const auth = useAuthorizationStore()

const mostrarSenha = ref(false)

const form: LoginRequest = reactive({
  username: '',
  password: '',
})

const rules = computed(() => ({
  username: {
    required,
  },

  password: {
    required,
    minLength: minLength(8),
  },
}))

const v$ = useVuelidate(rules, form)

async function onLogin() {
  try {
    const data = await api.autorizacao.login.post(form)

    auth.setAcessToken(data.accessToken)
    auth.setTokenType(data.tokenType)
    auth.setUsuario({
      id: data.id,
      username: data.username,
      tipos: data.tipos,
    })
  } finally {
    router.push('/home')
  }
}
</script>

<style scoped lang="scss">
.app-background {
  background: grey;
  background-size: cover;
}
</style>

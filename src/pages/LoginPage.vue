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
          autocorrect="off"
          autocapitalize="off"
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
          autocorrect="off"
          autocapitalize="off"
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
              :name="mostrarSenha ? 'las la-eye-slash' : 'las la-eye'"
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

import { useAuthenticationStore } from 'src/stores/authentication'

import { LoginRequest } from 'src/api/authentication'

const router = useRouter()
const auth = useAuthenticationStore()

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
    const data = await api.auth.login.post(form)
    auth.setToken(data.accessToken)
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

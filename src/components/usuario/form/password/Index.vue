<template>
  <div class="column">
    <q-input
      v-model="modelValue"
      label="Senha"
      :type="isPwd ? 'password' : 'text'"
      lazy-rules
      dense
      outlined
      :rules="[
        () => !v$.newPassword.required.$invalid || 'Campo obrigatório',
        () =>
          !v$.newPassword.minLength.$invalid ||
          'Tamanho mínimo de 8 caracteres',
        () =>
          !v$.newPassword.lettersAndNumbers.$invalid ||
          'Precisa conter letras e números',
      ]"
    >
      <template #append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>

    <q-input
      v-model="confirmationPassword"
      label="Confirmar Senha"
      :type="isConfirmationPwd ? 'password' : 'text'"
      dense
      outlined
      lazy-rules
      :rules="[
        () => !v$.confirmationPassword.required.$invalid || 'Campo obrigatório',
        () =>
          !v$.confirmationPassword.sameAsPassword.$invalid ||
          'Senhas não conferem',
        () =>
          !v$.confirmationPassword.minLength.$invalid ||
          'Tamanho mínimo de 8 caracteres',
        () =>
          !v$.confirmationPassword.lettersAndNumbers.$invalid ||
          'Precisa conter letras e números',
      ]"
    >
      <template #append>
        <q-icon
          :name="isConfirmationPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isConfirmationPwd = !isConfirmationPwd"
        />
      </template>
    </q-input>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { requiredIf, minLength, sameAs } from '@vuelidate/validators'

import type { UsuarioPasswordForm, UsuarioPasswordFormProps } from './'

const modelValue = defineModel<string>()

const props = withDefaults(defineProps<UsuarioPasswordFormProps>(), {
  required: false,
})

const isPwd = ref(true)
const isConfirmationPwd = ref(true)
const confirmationPassword = ref()

const form = computed(() => ({
  newPassword: modelValue.value,
  confirmationPassword: confirmationPassword?.value,
}))

const rules = computed(() => ({
  newPassword: {
    required: requiredIf(() => !!confirmationPassword.value || props.required),
    minLength: minLength(8),
    lettersAndNumbers: () => checkPasswordStrength(modelValue.value),
  },
  confirmationPassword: {
    required: requiredIf(() => !!modelValue.value),
    minLength: minLength(8),
    sameAsPassword: sameAs(form.value.newPassword),
    lettersAndNumbers: () => checkPasswordStrength(modelValue.value),
  },
}))

const v$ = useVuelidate(rules, form)

const valid = computed(() => !v$.value.$invalid)

function checkPasswordStrength(password: string | undefined) {
  if (!password) return true
  const regex = /(?=.*[0-9])(?=.*[A-Za-z])/
  return regex.test(password)
}

defineExpose<UsuarioPasswordForm>({
  valid,
})
</script>

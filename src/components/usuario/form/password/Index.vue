<template>
  <div v-if="modelValue" class="column">
    <q-input
      v-model="modelValue.password"
      label="Senha atual"
      :type="isPassword ? 'password' : 'text'"
      lazy-rules
      dense
      outlined
      :rules="[() => !v$.password.required.$invalid || 'Campo obrigatório']"
    >
      <template #append>
        <q-icon
          :name="isPassword ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPassword = !isPassword"
        />
      </template>
    </q-input>
    <q-input
      v-model="modelValue.newPassword"
      label="Nova senha"
      :type="isNewPassword ? 'password' : 'text'"
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
          :name="isNewPassword ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isNewPassword = !isNewPassword"
        />
      </template>
    </q-input>

    <q-input
      v-model="confirmationPassword"
      label="Confirmar nova senha"
      :type="isConfirmationPassword ? 'password' : 'text'"
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
          :name="isConfirmationPassword ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isConfirmationPassword = !isConfirmationPassword"
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

const modelValue = defineModel<{
  password?: string
  newPassword?: string
}>()

const props = withDefaults(defineProps<UsuarioPasswordFormProps>(), {
  required: false,
})

const isPassword = ref(true)
const isNewPassword = ref(true)
const isConfirmationPassword = ref(true)

const confirmationPassword = ref('')

const form = computed(() => ({
  password: modelValue.value?.password,
  newPassword: modelValue.value?.newPassword,
  confirmationPassword: confirmationPassword?.value,
}))

const rules = computed(() => ({
  password: {
    required: requiredIf(
      () =>
        !!confirmationPassword.value.trim() ||
        props.required ||
        !!modelValue.value?.newPassword?.trim(),
    ),
  },
  newPassword: {
    required: requiredIf(
      () =>
        !!confirmationPassword.value.trim() ||
        props.required ||
        !!modelValue.value?.password?.trim(),
    ),
    minLength: minLength(8),
    lettersAndNumbers: () =>
      checkPasswordStrength(modelValue.value?.newPassword),
  },
  confirmationPassword: {
    required: requiredIf(
      () =>
        !!modelValue.value?.newPassword?.trim() ||
        !!modelValue.value?.password?.trim(),
    ),
    minLength: minLength(8),
    sameAsPassword: sameAs(form.value.newPassword?.trim()),
    lettersAndNumbers: () =>
      checkPasswordStrength(modelValue.value?.newPassword?.trim()),
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

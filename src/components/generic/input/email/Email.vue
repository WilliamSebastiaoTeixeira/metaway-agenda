<template>
  <q-input
    v-bind="props"
    v-model="modelValue"
    v-maska
    :rules="[
      () => !v$.email.required.$invalid || 'O e-mail é obrigatório',
      () => !v$.email.email.$invalid || 'E-mail inválido',
    ]"
    no-error-icon
  />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { vMaska } from 'maska'
import { type QInputProps } from 'quasar'
import useVuelidate from '@vuelidate/core'
import { requiredIf, email } from '@vuelidate/validators'

import type { GenericInputEmail } from './email'

interface Props extends Omit<QInputProps, 'modelValue'> {
  required: boolean
}

const modelValue = defineModel<string>()

const props = withDefaults(defineProps<Props>(), {
  required: false,
})

const form = computed(() => ({
  email: modelValue.value,
}))

const rules = computed(() => ({
  email: {
    required: requiredIf(() => props.required),
    email,
  },
}))

const v$ = useVuelidate(rules, form)

const valid = computed(() => !v$.value.$invalid)

defineExpose<GenericInputEmail>({
  valid,
})
</script>

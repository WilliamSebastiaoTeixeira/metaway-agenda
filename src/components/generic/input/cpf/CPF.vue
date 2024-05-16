<template>
  <q-input
    v-bind="props"
    v-model="modelValue"
    v-maska
    data-maska="###.###.###-##"
    :rules="[
      () => !v$.CPF.required.$invalid || 'Insira o CPF',
      () => !v$.CPF.cpfValido.$invalid || 'CPF Inválido',
    ]"
    no-error-icon
  />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { vMaska } from 'maska'

import useVuelidate from '@vuelidate/core'
import { requiredIf } from '@vuelidate/validators'
import { type QInputProps } from 'quasar'

/* eslint-disable */
//@ts-ignore
import { validateBr } from 'js-brasil'
/* eslint-enable */

import type { GenericInputCPF } from './CPF'

interface Props extends Omit<QInputProps, 'modelValue'> {
  required: boolean
}

const modelValue = defineModel<string>()

const props = withDefaults(defineProps<Props>(), {
  required: false,
})

const form = computed(() => ({
  CPF: modelValue.value,
}))

const rules = computed(() => ({
  CPF: {
    required: requiredIf(() => props.required),
    cpfValido: () => {
      if (!form.value.CPF && !props.required) return true
      return validateBr.cpf(form.value.CPF)
    },
  },
}))

const v$ = useVuelidate(rules, form)

const valid = computed(() => !v$.value.$invalid)

defineExpose<GenericInputCPF>({
  valid,
})
</script>

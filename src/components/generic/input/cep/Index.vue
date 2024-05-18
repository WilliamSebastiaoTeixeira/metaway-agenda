<template>
  <q-input
    v-bind="props"
    v-model="modelValue"
    v-maska
    data-maska="#####-###"
    :rules="[() => !v$.CEP.required.$invalid || 'Insira o CEP']"
    no-error-icon
  />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { vMaska } from 'maska'

import useVuelidate from '@vuelidate/core'
import { requiredIf } from '@vuelidate/validators'

import type { GenericInputCEPExpose, GenericInputCEPProps } from './index'

const modelValue = defineModel<string>()

const props = withDefaults(defineProps<GenericInputCEPProps>(), {
  required: false,
})

const form = computed(() => ({
  CEP: modelValue.value,
}))

const rules = computed(() => ({
  CEP: {
    required: requiredIf(() => props.required),
  },
}))

const v$ = useVuelidate(rules, form)

const valid = computed(() => !v$.value.$invalid)

defineExpose<GenericInputCEPExpose>({
  valid,
})
</script>

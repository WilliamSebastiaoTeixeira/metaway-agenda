<template>
  <q-input
    v-bind="props"
    v-model="modelValue"
    placeholder="AAAA-MM-DD"
    mask="####-##-##"
    :rules="[
      () => !v$.date.required.$invalid || 'O preenchimento é obrigatório',
      () => !v$.date.validDate.$invalid || 'A data é inválida',
    ]"
  >
    <q-popup-proxy transition-show="jump-down" transition-hide="jump-up">
      <q-banner class="column q-pa-md">
        <q-date
          v-model="modelValue"
          mask="YYYY-MM-DD"
          color="blue-8"
          minimal
          flat
        />
      </q-banner>
    </q-popup-proxy>
    <template #[iconPositon]>
      <q-icon name="event" class="cursor-pointer" />
    </template>
  </q-input>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { requiredIf } from '@vuelidate/validators'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import type { GenericInputDateExpose, GenericInputDateProps } from './index'

dayjs.extend(customParseFormat)

const modelValue = defineModel<string>()

const props = withDefaults(defineProps<GenericInputDateProps>(), {
  date: null,
  iconPositon: 'prepend',
  required: false,
})

const form = computed(() => ({
  date: modelValue.value,
}))

const rules = computed(() => ({
  date: {
    required: requiredIf(() => props.required),
    validDate: () => dayjs(modelValue.value, 'YYYY-MM-DD', true).isValid(),
  },
}))

const v$ = useVuelidate(rules, form)

const valid = computed(() => !v$.value.$invalid)

defineExpose<GenericInputDateExpose>({
  valid,
})
</script>

<template>
  <q-select
    v-model="modelValue"
    v-bind="props"
    map-options
    emit-value
    option-label="nome"
    use-input
    input-debounce="500"
    label="Pessoa"
    clearable
    :options="options"
    :rules="[() => !v$.pessoa.required.$invalid || 'Selecione uma pessoa']"
    @filter="filter"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { QSelect } from 'quasar'

import useVuelidate from '@vuelidate/core'
import { requiredIf } from '@vuelidate/validators'

import api from 'src/api'

import type { Pessoa } from 'src/types/pessoa'
import type { PessoaSelectProps, PessoaSelectExpose } from './index'

const modelValue = defineModel<Pessoa | null>()

const props = withDefaults(defineProps<PessoaSelectProps>(), {
  required: false,
})

const options = ref<Pessoa[]>([])

const form = computed(() => ({
  pessoa: modelValue.value,
}))

const rules = computed(() => ({
  pessoa: {
    required: requiredIf(() => props.required),
  },
}))

const v$ = useVuelidate(rules, form)

const valid = computed(() => !v$.value.$invalid)

async function filter(
  val: string,
  update: (callbackFn: () => void, afterFn?: (ref: QSelect) => void) => void,
) {
  const filter = {
    nome: val,
  }

  update(async () => {
    options.value = await api.pessoa.pesquisar.post(filter)
  })
}

defineExpose<PessoaSelectExpose>({
  valid,
})
</script>

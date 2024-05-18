<template>
  <div v-if="modelValue" class="column">
    <CPF
      ref="cpfRef"
      v-model="modelValue.cpf"
      label="CPF"
      outlined
      dense
      required
    />

    <q-input
      v-model="modelValue.nome"
      label="Nome"
      outlined
      dense
      :rules="[() => !v$.nome.required.$invalid || 'O nome é obrigatório']"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

import type { PessoaFormExpose } from './index'
import type { GenericInputCPFExpose } from 'src/components/generic/input/cpf'
import type { Pessoa } from 'src/types/pessoa'

import CPF from 'src/components/generic/input/cpf/Index.vue'

const modelValue = defineModel<Pessoa>()

const cpfRef = ref<GenericInputCPFExpose>()

const form = computed(() => ({
  nome: modelValue.value?.nome,
}))

const rules = computed(() => ({
  nome: { required },
}))

const v$ = useVuelidate(rules, form)

const valid = computed(() => {
  return !!cpfRef.value?.valid && !v$.value.$invalid
})

defineExpose<PessoaFormExpose>({
  valid,
})
</script>

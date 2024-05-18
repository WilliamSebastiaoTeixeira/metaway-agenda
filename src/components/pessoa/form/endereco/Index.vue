<template>
  <div v-if="modelValue" class="column">
    <CEP
      ref="cepRef"
      v-model="modelValue.cep"
      label="Cep"
      :loading="loadingCep"
      outlined
      dense
      required
    />

    <q-input
      v-model="modelValue.bairro"
      label="Bairro"
      outlined
      dense
      :rules="[() => !v$.bairro.required.$invalid || 'O bairro é obrigatório']"
    />

    <q-input
      v-model="modelValue.cidade"
      label="Cidade"
      outlined
      dense
      :rules="[() => !v$.cidade.required.$invalid || 'O cidade é obrigatório']"
    />

    <q-input
      v-model="modelValue.estado"
      label="Estado"
      outlined
      dense
      :rules="[() => !v$.estado.required.$invalid || 'O estado é obrigatório']"
    />

    <q-input
      v-model="modelValue.logradouro"
      label="Logradouro"
      outlined
      dense
      :rules="[
        () => !v$.logradouro.required.$invalid || 'O logradouro é obrigatório',
      ]"
    />

    <q-input
      v-model.number="modelValue.numero"
      bottom-slots
      type="number"
      label="Numero"
      outlined
      dense
    />

    <q-input
      v-model="modelValue.pais"
      label="Pais"
      outlined
      dense
      :rules="[() => !v$.pais.required.$invalid || 'O pais é obrigatório']"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

import type { PessoaFormEnderecoExpose } from './index'
import type { EnderecoWithoutId } from 'src/types/pessoa'

import CEP from 'src/components/generic/input/cep/Index.vue'

const modelValue = defineModel<EnderecoWithoutId>()

const cepRef = ref()
const loadingCep = ref(false)

const form = computed(() => ({
  cep: modelValue.value?.cep,
  bairro: modelValue.value?.bairro,
  cidade: modelValue.value?.cidade,
  estado: modelValue.value?.estado,
  logradouro: modelValue.value?.logradouro,
  pais: modelValue.value?.pais,
}))

const rules = computed(() => ({
  cep: { required },
  bairro: { required },
  cidade: { required },
  estado: { required },
  logradouro: { required },
  pais: { required },
}))

const v$ = useVuelidate(rules, form)

const valid = computed(() => {
  return !!cepRef.value?.valid && !v$.value.$invalid
})

async function loadCep() {
  const value = modelValue.value?.cep.replace(/[^0-9]+/, '') || ''
  if (value.length < 8 || !modelValue.value) return
  try {
    loadingCep.value = true
    const data = await fetch(`https://viacep.com.br/ws/${value}/json/`)
    const response = await data.json()

    modelValue.value.bairro = response.bairro
    modelValue.value.cidade = response.localidade
    modelValue.value.estado = response.uf
    modelValue.value.logradouro = response.logradouro
  } catch (e) {
  } finally {
    loadingCep.value = false
  }
}

defineExpose<PessoaFormEnderecoExpose>({
  valid,
})

watch(() => [form.value.cep], loadCep)
</script>

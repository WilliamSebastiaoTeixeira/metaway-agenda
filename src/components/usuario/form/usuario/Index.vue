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

    <Date
      ref="dataNascimentoRef"
      v-model="modelValue.dataNascimento"
      label="Data de Nascimento"
      icon-positon="append"
      outlined
      dense
      required
    />

    <Email
      ref="emailRef"
      v-model="modelValue.email"
      label="Email"
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

    <q-input
      v-model="modelValue.username"
      label="Username"
      outlined
      dense
      :rules="[
        () => !v$.username.required.$invalid || 'O username é obrigatório',
      ]"
    />

    <q-input
      v-model="modelValue.telefone"
      v-maska
      label="Telefone"
      outlined
      dense
      data-maska="['(##) ####-####', '(##) #####-####']"
      :rules="[
        () => !v$.telefone.required.$invalid || 'O telefone é obrigatório',
      ]"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { vMaska } from 'maska'

import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

import type { UsuarioFormExpose } from './index'
import type { GenericInputCPFExpose } from 'src/components/generic/input/cpf'
import type { GenericInputEmailExpose } from 'src/components/generic/input/email'
import type { GenericInputDateExpose } from 'src/components/generic/input/date'
import type { Usuario } from 'src/types/usuario'

import CPF from 'src/components/generic/input/cpf/Index.vue'
import Date from 'src/components/generic/input/date/Index.vue'
import Email from 'src/components/generic/input/email/Index.vue'

const modelValue = defineModel<Usuario>()

const cpfRef = ref<GenericInputCPFExpose>()
const emailRef = ref<GenericInputEmailExpose>()
const dataNascimentoRef = ref<GenericInputDateExpose>()

const form = computed(() => ({
  nome: modelValue.value?.nome,
  username: modelValue.value?.username,
  telefone: modelValue.value?.telefone,
}))

const rules = computed(() => ({
  nome: { required },
  username: { required },
  telefone: { required },
}))

const v$ = useVuelidate(rules, form)

const valid = computed(() => {
  return (
    !!cpfRef.value?.valid &&
    !!emailRef.value?.valid &&
    !!dataNascimentoRef.value?.valid &&
    !v$.value.$invalid
  )
})

defineExpose<UsuarioFormExpose>({
  valid,
})
</script>

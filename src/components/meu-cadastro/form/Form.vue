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
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

//import useVuelidate from '@vuelidate/core'
//import { required } from '@vuelidate/validators'

import type { MeuCadastroForm } from 'src/components/meu-cadastro/form/form'
import type { GenericInputCPF } from 'src/components/generic/input/cpf/CPF'
import type { GenericInputEmail } from 'src/components/generic/input/email/email'
import type { GenericInputDate } from 'src/components/generic/input/date/date'
import type { Usuario } from 'src/types/usuario'

import CPF from 'src/components/generic/input/cpf/CPF.vue'
import Date from 'src/components/generic/input/date/Date.vue'
import Email from 'src/components/generic/input/email/Email.vue'

const modelValue = defineModel<Usuario>()

const cpfRef = ref<GenericInputCPF>()
const emailRef = ref<GenericInputEmail>()
const dataNascimentoRef = ref<GenericInputDate>()

//const form = computed(() => ({}))

//const rules = computed(() => ({}))

//const v$ = useVuelidate(rules, form)

const valid = computed(() => {
  return (
    !!cpfRef.value?.valid &&
    !!emailRef.value?.valid &&
    !!dataNascimentoRef.value?.valid //&& !v$.value.$invalid
  )
})

defineExpose<MeuCadastroForm>({
  valid,
})
</script>

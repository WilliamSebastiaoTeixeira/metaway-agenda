<template>
  <q-select
    v-model="modelValue"
    v-bind="props"
    map-options
    emit-value
    option-label="nome"
    use-input
    input-debounce="500"
    label="Usuario"
    clearable
    :options="options"
    :rules="[() => !v$.usuario.required.$invalid || 'Selecione um usuário']"
    @filter="filter"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { QSelect } from 'quasar'

import useVuelidate from '@vuelidate/core'
import { requiredIf } from '@vuelidate/validators'

import api from 'src/api'

import type { Usuario } from 'src/types/usuario'
import type { UsuarioSelectProps, UsuarioSelectExpose } from './index'

const modelValue = defineModel<Usuario | null>()

const props = withDefaults(defineProps<UsuarioSelectProps>(), {
  required: false,
})

const options = ref<Usuario[]>([])

const form = computed(() => ({
  usuario: modelValue.value,
}))

const rules = computed(() => ({
  usuario: {
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
    termo: val,
  }

  update(async () => {
    options.value = await api.usuario.pesquisar.post(filter)
  })
}

defineExpose<UsuarioSelectExpose>({
  valid,
})
</script>

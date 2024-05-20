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
  >
    <template #selected>
      <q-item>
        <q-item-section v-if="modelValue?.foto" avatar>
          <Foto
            :id="modelValue.id"
            style="height: 150px; width: 150px"
            :foto="modelValue.foto"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ modelValue?.nome }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
    <template #option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section v-if="scope.opt?.foto" avatar>
          <Foto
            :id="scope.opt.id"
            style="height: 150px; width: 150px"
            :foto="scope.opt.foto"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ scope.opt.nome }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { QSelect } from 'quasar'

import useVuelidate from '@vuelidate/core'
import { requiredIf } from '@vuelidate/validators'

import api from 'src/api'

import type { Pessoa } from 'src/types/pessoa'
import type { PessoaSelectProps, PessoaSelectExpose } from './index'

import Foto from 'src/components/generic/foto/Index.vue'

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

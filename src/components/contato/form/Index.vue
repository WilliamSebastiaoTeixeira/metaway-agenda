<template>
  <div v-if="modelValue" class="column">
    <div class="row justify-around items-center q-mb-md">
      <Foto
        v-if="modelValue.pessoa?.foto"
        :id="modelValue.pessoa.id"
        style="height: 150px; width: 150px"
        :foto="modelValue.pessoa.foto"
      />
    </div>

    <PessoaSelect
      ref="pessoaSelectRef"
      v-model="modelValue.pessoa"
      outlined
      dense
      required
    />

    <UsuarioSelect v-model="modelValue.usuario" outlined dense />

    <q-separator />

    <q-toggle
      v-if="!editing"
      v-model="modelValue.privado"
      label="Privado"
      class="q-mt-md"
    />

    <q-input
      v-model="modelValue.tag"
      class="q-mt-md"
      label="Tag"
      outlined
      dense
      bottom-slots
    />

    <q-select
      v-model="modelValue.tipoContato"
      outlined
      map-options
      emit-value
      dense
      label="Tipo de contato"
      :options="optionsTipoContato"
      bottom-slots
      @update:model-value="updateTipoContato"
    />

    <Email
      v-if="modelValue.tipoContato === TipoContatoEnum.EMAIL"
      ref="emailRef"
      v-model="modelValue.email"
      label="Email"
      outlined
      dense
      required
    />

    <q-input
      v-if="
        modelValue.tipoContato === TipoContatoEnum.TELEFONE ||
        modelValue.tipoContato === TipoContatoEnum.CELULAR
      "
      v-model="modelValue.telefone"
      v-maska
      label="Telefone"
      outlined
      dense
      :data-maska="mascaraTelefone"
      :rules="[() => !v$.telefone.required.$invalid || 'O campo é obrigatório']"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { vMaska } from 'maska'

import useVuelidate from '@vuelidate/core'
import { requiredIf } from '@vuelidate/validators'

import type { Contato } from 'src/types/contato'
import type { ContatoFormExpose, ContatoFormProps } from './index'
import type { GenericInputEmailExpose } from 'src/components/generic/input/email'
import type { PessoaSelectExpose } from 'src/components/pessoa/select'

import { TipoContatoEnum } from 'src/types/enum/tipoContato'

import Email from 'src/components/generic/input/email/Index.vue'
import PessoaSelect from 'src/components/pessoa/select/Index.vue'
import UsuarioSelect from 'src/components/usuario/select/Index.vue'
import Foto from 'src/components/generic/foto/Index.vue'

withDefaults(defineProps<ContatoFormProps>(), {
  editing: false,
})

const modelValue = defineModel<Contato>()

const optionsTipoContato = [
  { label: 'Celular', value: TipoContatoEnum.CELULAR },
  { label: 'Telefone', value: TipoContatoEnum.TELEFONE },
  { label: 'Email', value: TipoContatoEnum.EMAIL },
]

const pessoaSelectRef = ref<PessoaSelectExpose>()
const emailRef = ref<GenericInputEmailExpose>()

const mascaraTelefone = computed(() =>
  modelValue.value?.tipoContato === TipoContatoEnum.TELEFONE
    ? "['(##) ####-####']"
    : "['(##) #####-####']",
)

const form = computed(() => ({
  telefone: modelValue.value?.telefone,
}))

const rules = computed(() => ({
  telefone: {
    required: requiredIf(
      modelValue.value?.tipoContato === TipoContatoEnum.CELULAR ||
        modelValue.value?.tipoContato === TipoContatoEnum.TELEFONE,
    ),
  },
}))

const v$ = useVuelidate(rules, form)

const valid = computed(() => {
  return (
    !v$.value.$invalid &&
    !!pessoaSelectRef.value?.valid &&
    (emailRef.value ? !!emailRef.value?.valid : true)
  )
})

function updateTipoContato() {
  if (!modelValue.value) return

  if (
    modelValue.value.tipoContato === TipoContatoEnum.CELULAR ||
    modelValue.value.tipoContato === TipoContatoEnum.TELEFONE
  ) {
    modelValue.value.email = ''
  }

  if (modelValue.value.tipoContato === TipoContatoEnum.EMAIL) {
    modelValue.value.telefone = ''
  }
}

defineExpose<ContatoFormExpose>({
  valid,
})
</script>

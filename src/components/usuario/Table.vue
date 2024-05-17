<template>
  <div v-if="modelValue">
    <q-table
      flat
      bordered
      :hide-bottom="!!modelValue?.length"
      row-key="id"
      :loading="tableProps.loading"
      :rows="modelValue"
      :columns="columns"
      :rows-per-page-options="[0]"
    >
      <template #body-cell-editar="props">
        <q-td :props="props">
          <q-btn
            unelevated
            round
            flat
            color="blue-8"
            icon="las la-edit"
            @click="emit('editar', props.row)"
          />
        </q-td>
      </template>

      <template #no-data>
        <q-item
          v-if="!tableProps.loading"
          class="column items-center justify-center full-width"
        >
          <q-item-section class="column items-center q-pa-md q-gutter-y-sm">
            <q-icon avatar name="las la-users" color="grey-8" size="40px" />
            <span class="text-grey-7 text-body2">
              Nenhum usuário encontrado
            </span>
          </q-item-section>
        </q-item>
      </template>
    </q-table>
  </div>
</template>
<script setup lang="ts">
import { type QTableProps } from 'quasar'

import type { Usuario } from 'src/types/usuario'

interface Props {
  loading: boolean
}

const tableProps = withDefaults(defineProps<Props>(), {
  loading: false,
})

const emit = defineEmits<{
  editar: [usuario: Usuario]
}>()

const modelValue = defineModel<Usuario[]>()

const columns: QTableProps['columns'] = [
  {
    name: 'nome',
    label: 'Nome',
    align: 'left',
    field: (data: Usuario) => data.nome,
  },
  {
    name: 'username',
    label: 'Username',
    align: 'left',
    field: (data: Usuario) => data.username,
  },
  {
    name: 'cpf',
    label: 'CPF',
    align: 'left',
    field: (data: Usuario) => data.cpf,
  },
  {
    name: 'dataNascimento',
    label: 'Data de nascimento',
    align: 'left',
    field: (data: Usuario) => data.dataNascimento,
  },
  {
    name: 'email',
    label: 'Email',
    align: 'left',
    field: (data: Usuario) => data.email,
  },
  {
    name: 'telefone',
    label: 'Telefone',
    align: 'left',
    field: (data: Usuario) => data.telefone,
  },
  {
    name: 'editar',
    label: 'Editar',
    align: 'left',
    field: '',
  },
]
</script>

<template>
  <div v-if="modelValue">
    <q-table
      flat
      bordered
      hide-bottom
      row-key="id"
      :rows="modelValue"
      :columns="columns"
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
    </q-table>
  </div>
</template>
<script setup lang="ts">
import { type QTableProps } from 'quasar'

import type { Usuario } from 'src/types/usuario'

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

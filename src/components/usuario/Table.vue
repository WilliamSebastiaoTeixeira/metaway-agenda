<template>
  <div v-if="modelValue">
    <q-table
      flat
      bordered
      row-key="id"
      :grid="mobileOrSmallWidth"
      :hide-bottom="!!modelValue?.length"
      :loading="tableProps.loading"
      :rows="modelValue"
      :columns="columns"
      :rows-per-page-options="[0]"
    >
      <template #header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

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

      <template #item="props">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
        >
          <q-card>
            <q-list dense>
              <q-item v-for="col in props.cols" :key="col.name">
                <q-item-section>
                  <q-item-label> {{ col.label }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-btn
                    v-if="col.name === 'editar'"
                    unelevated
                    round
                    flat
                    color="blue-8"
                    icon="las la-edit"
                    @click="emit('editar', props.row)"
                  />
                  <q-item-label
                    v-else
                    caption
                    :class="col.classes ? col.classes : ''"
                  >
                    {{ col.value }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
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
import { useGeneralStore } from 'src/stores/general'
import { storeToRefs } from 'pinia'

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

const generalStore = useGeneralStore()
const { mobileOrSmallWidth } = storeToRefs(generalStore)

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

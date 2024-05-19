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

      <template #body-cell-foto="props">
        <q-td :props="props">
          <Foto
            v-if="props.row.foto"
            :id="props.row.id"
            style="height: 150px; width: 150px"
            :foto="props.row.foto"
          />
        </q-td>
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

      <template #body-cell-remover="props">
        <q-td :props="props">
          <q-btn
            unelevated
            round
            flat
            color="negative"
            icon="las la-trash-alt"
            @click="emit('remover', props.row)"
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
                <div
                  v-if="col.name === 'foto' && !!props.row.foto"
                  class="row justify-center items-center full-width"
                >
                  <Foto
                    :id="props.row.id"
                    :foto="props.row.foto"
                    style="width: 150px"
                  />
                </div>
                <q-item-section>
                  <q-item-label> {{ col.label }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div v-if="col.name === 'foto'"></div>
                  <q-btn
                    v-else-if="col.name === 'editar'"
                    unelevated
                    round
                    flat
                    color="blue-8"
                    icon="las la-edit"
                    @click="emit('editar', props.row)"
                  />
                  <q-btn
                    v-else-if="col.name === 'remover'"
                    unelevated
                    round
                    flat
                    color="negative"
                    icon="las la-trash-alt"
                    @click="emit('remover', props.row)"
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
            <q-icon
              avatar
              name="las la-user-circle"
              color="grey-8"
              size="40px"
            />
            <span class="text-grey-7 text-body2">
              Nenhuma pessoa encontrada
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

import type { Pessoa } from 'src/types/pessoa'

import Foto from 'src/components/generic/foto/Index.vue'

interface Props {
  loading: boolean
}

const tableProps = withDefaults(defineProps<Props>(), {
  loading: false,
})

const emit = defineEmits<{
  editar: [pessoa: Pessoa]
  remover: [pessoa: Pessoa]
}>()

const modelValue = defineModel<Pessoa[]>()

const generalStore = useGeneralStore()
const { mobileOrSmallWidth } = storeToRefs(generalStore)

const columns: QTableProps['columns'] = [
  {
    name: 'foto',
    label: '',
    align: 'left',
    field: (data: Pessoa) => data.foto,
  },
  {
    name: 'nome',
    label: 'Nome',
    align: 'left',
    field: (data: Pessoa) => data.nome,
  },
  {
    name: 'cpf',
    label: 'CPF',
    align: 'left',
    field: (data: Pessoa) => data.cpf,
  },
  {
    name: 'editar',
    label: 'Editar',
    align: 'left',
    field: '',
  },
  {
    name: 'remover',
    label: 'Remover',
    align: 'left',
    field: '',
  },
]
</script>

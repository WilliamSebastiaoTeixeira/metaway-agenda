<template>
  <div v-if="modelValue">
    <q-table
      flat
      bordered
      row-key="id"
      :grid="mobileOrSmallWidth"
      :hide-bottom="!!modelValue?.length"
      :loading="tableProps.loading"
      :rows="contatoComFavoritos"
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

      <template #body-cell-favorito="props">
        <q-td :props="props">
          <q-btn
            unelevated
            round
            flat
            :color="props.row.favorito ? 'yellow-8' : 'grey-6'"
            icon="las la-star"
            @click="toggleFavorito(props.row)"
          />
        </q-td>
      </template>

      <template #body-cell-foto="props">
        <q-td :props="props">
          <Foto
            v-if="props.row.pessoa.foto"
            :id="props.row.pessoa.id"
            style="height: 150px; width: 150px"
            :foto="props.row.pessoa.foto"
          />
        </q-td>
      </template>

      <template #body-cell-privado="props">
        <q-td :props="props">
          <q-chip
            :label="props.row.privado ? 'Privado' : 'Público'"
            :color="props.row.privado ? 'negative' : 'positive'"
            class="text-white"
          />
        </q-td>
      </template>

      <template #body-cell-tag="props">
        <q-td :props="props">
          <q-chip :label="props.row.tag" color="primary" class="text-white" />
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
            :disable="props.row.privado"
            @click="editar(props.row)"
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
            @click="remover(props.row)"
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
                    v-if="col.name === 'favorito'"
                    unelevated
                    round
                    flat
                    :color="props.row.favorito ? 'yellow-8' : 'grey-6'"
                    icon="las la-star"
                    @click="toggleFavorito(props.row)"
                  />

                  <div
                    v-if="col.name === 'foto' && !!props.row.pessoa.foto"
                    class="row justify-center items-center full-width q-mt-sm"
                  >
                    <Foto
                      :id="props.row.pessoa.id"
                      :foto="props.row.pessoa.foto"
                      style="width: 150px"
                    />
                  </div>
                  <q-btn
                    v-else-if="col.name === 'editar'"
                    unelevated
                    round
                    flat
                    color="blue-8"
                    icon="las la-edit"
                    :disable="props.row.privado"
                    @click="emit('editar', props.row)"
                  />
                  <q-chip
                    v-else-if="col.name === 'privado'"
                    :label="props.row.privado ? 'Privado' : 'Público'"
                    :color="props.row.privado ? 'negative' : 'positive'"
                    class="text-white"
                  />
                  <q-chip
                    v-else-if="col.name === 'tag'"
                    :label="props.row.tag"
                    color="primary"
                    class="text-white"
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
              Nenhuma contato encontrado
            </span>
          </q-item-section>
        </q-item>
      </template>
    </q-table>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { type QTableProps, Notify } from 'quasar'
import { useGeneralStore } from 'src/stores/general'
import { storeToRefs } from 'pinia'

import api from 'src/api'
import type { Contato } from 'src/types/contato'

import Foto from 'src/components/generic/foto/Index.vue'

interface ContatoComFavoritos extends Contato {
  favorito?: boolean
}

interface Props {
  loading: boolean
  favoritar: boolean
}

const tableProps = withDefaults(defineProps<Props>(), {
  loading: false,
  favoritar: false,
  favoritos: undefined,
})

const emit = defineEmits<{
  editar: [contato: Contato]
  remover: [contato: Contato]
}>()

const modelValue = defineModel<Contato[]>()

const favoritos = ref<Contato[]>([])

const generalStore = useGeneralStore()
const { mobileOrSmallWidth } = storeToRefs(generalStore)

const contatoComFavoritos = computed<ContatoComFavoritos[]>(() => {
  return (
    modelValue.value?.map((contato) => {
      return {
        ...contato,
        favorito: !!favoritos.value.some(
          (favorito) => favorito.id === contato.id,
        ),
      }
    }) || []
  )
})

const columns = computed(() => {
  const colunas: QTableProps['columns'] = [
    {
      name: 'nome',
      label: 'Nome',
      align: 'left',
      field: (data: Contato) => data.pessoa?.nome,
    },
    {
      name: 'email',
      label: 'Email',
      align: 'left',
      field: (data: Contato) => data.email,
    },
    {
      name: 'telefone',
      label: 'Telefone | Celular',
      align: 'left',
      field: (data: Contato) => data.telefone,
    },
    {
      name: 'privado',
      label: 'Privado | Público',
      align: 'left',
      field: (data: Contato) => data.privado,
    },
    {
      name: 'tag',
      label: 'Tag',
      align: 'left',
      field: (data: Contato) => data.tag,
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

  if (tableProps.favoritar) {
    const favoritarColuna: QTableProps['columns'] = [
      {
        name: 'favorito',
        label: 'Favorito',
        align: 'left',
        field: '',
      },
      {
        name: 'foto',
        label: 'Foto',
        align: 'left',
        field: (data: Contato) => data.pessoa?.foto,
      },
    ]

    return favoritarColuna.concat(colunas)
  }

  return colunas
})

function editar(contato: ContatoComFavoritos) {
  delete contato.favorito
  emit('editar', contato)
}

function remover(contato: ContatoComFavoritos) {
  delete contato.favorito
  emit('remover', contato)
}

async function adicionarFavorito(contato: ContatoComFavoritos) {
  try {
    await api.favorito.salvar.post(contato)

    favoritos.value.push(contato)

    Notify.create({
      message: 'Contato adicionado aos favoritos',
      position: 'bottom',
      type: 'positive',
    })
  } catch (e) {}
}

async function removerFavorito(contato: ContatoComFavoritos) {
  try {
    await api.favorito.remover.delete(contato.id)

    favoritos.value = favoritos.value?.filter(
      (favorito) => favorito.id !== contato.id,
    )

    Notify.create({
      message: 'Contato removido dos favoritos',
      position: 'bottom',
      type: 'positive',
    })
  } catch (e) {}
}

async function toggleFavorito(contato: ContatoComFavoritos) {
  if (contato.favorito) {
    removerFavorito(contato)
    return
  }
  adicionarFavorito(contato)
}

async function load() {
  try {
    const data = await api.favorito.pesquisar.get()
    favoritos.value = data
  } catch (e) {}
}

onMounted(load)
</script>

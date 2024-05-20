<template>
  <q-img
    :src="image || url"
    :alt="props.foto?.name"
    ratio="1"
    fit="scale-down"
    width="100%"
    style="width: 100%; border-radius: 4px; border: 1px solid #f4f4f4"
  />
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

import api from 'src/api'

import type { Foto } from 'src/types/foto'

interface Props {
  id?: number | null
  foto?: Foto | null
  url?: string | null
}

const props = defineProps<Props>()
const image = ref()

async function load() {
  if (!props.foto || !props.id) {
    image.value = undefined
    return
  }
  const data = await api.foto.download.get(props.id, props.foto)
  image.value = data
}

onMounted(load)

watch(() => [props.foto, props.id, props.url], load)
</script>

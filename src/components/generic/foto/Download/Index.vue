<template>
  <q-img
    :src="image"
    :alt="props.foto?.name"
    ratio="1"
    fit="scale-down"
    width="100%"
    style="width: 100%"
  />
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

import api from 'src/api'

import type { Foto } from 'src/types/foto'

interface Props {
  id: number
  foto: Foto
}

const props = defineProps<Props>()
const image = ref()

async function load() {
  if (!props.foto || !props.id) return
  const data = await api.foto.download.get(props.id, props.foto)
  image.value = data
}

onMounted(load)
</script>

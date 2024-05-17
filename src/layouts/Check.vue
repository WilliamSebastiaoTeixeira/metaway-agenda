<template>
  <Web v-if="!mobileOrSmallWidth" />
  <Mobile v-if="mobileOrSmallWidth" />
</template>
<script setup lang="ts">
import { useGeneralStore } from 'src/stores/general'
import { storeToRefs } from 'pinia'

import Web from './Web.vue'
import Mobile from './Mobile.vue'

const generalStore = useGeneralStore()
const { mobileOrSmallWidth } = storeToRefs(generalStore)
</script>

<template>
  <Web v-if="!mobileOrSmallWidth" />
  <Mobile v-if="mobileOrSmallWidth" />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useQuasar } from 'quasar'

import Web from './Web.vue'
import Mobile from './Mobile.vue'

const $q = useQuasar()

const mobileOrSmallWidth = computed(() => {
  return $q.screen.width < 585 || $q.platform.is.mobile
})
</script>

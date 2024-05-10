<template>
  <WebLayout v-if="!mobileOrSmallWidth" />
  <MobileLayout v-if="mobileOrSmallWidth" />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useQuasar } from 'quasar'

import WebLayout from './Web.vue'
import MobileLayout from './Mobile.vue'

const $q = useQuasar()

const mobileOrSmallWidth = computed(() => {
  return $q.screen.width < 585 || $q.platform.is.mobile
})
</script>

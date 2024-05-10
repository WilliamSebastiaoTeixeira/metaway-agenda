<template>
  <q-header class="header-shadow">
    <q-toolbar class="bg-white text-primary q-pa-md no-shadow">
      <q-toolbar-title class="row items-center q-gutter-x-md">
        <span class="label-subtitle">Agenda pessoal</span>
      </q-toolbar-title>

      <div class="q-gutter-x-sm">
        <q-avatar
          class="cursor-pointer"
          text-color="primary"
          icon="las la-wrench"
        >
          <MenuToolBar />
        </q-avatar>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import MenuToolBar from './MenuToolBar.vue'
</script>

<style scoped lang="scss">
.header-shadow {
  box-shadow: 0 0 5px rgba(31, 30, 47, 0.08);
}

.label-subtitle {
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #75798d;

  margin-left: 16px;
  padding: 4px 0 4px 16px;
  border-left: 1px solid #e6e8eb;
}
</style>

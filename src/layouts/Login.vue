<template>
  <q-layout view="hHh Lpr fFf">
    <q-page-container class="app-bg-color items-center justify-center">
      <router-view class="column justify-evenly items-center" />
      <q-dialog
        full-height
        full-width
        transition-show="fade-in"
        transition-hide="fade-out"
      >
        <div class="flex justify-center items-center">
          <q-circular-progress
            indeterminate
            size="50px"
            color="white"
            class="q-ma-md"
          />
        </div>
      </q-dialog>
    </q-page-container>
  </q-layout>
</template>

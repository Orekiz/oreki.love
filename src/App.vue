<script setup lang="ts">
import MainView from './views/Main.vue'
</script>

<template>
  <MainView />
</template>

<style>
@media screen and (max-width:768px) {
  html {
    font-size: 12px;
  }
}
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>

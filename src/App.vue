<script setup>
import { RouterLink, RouterView } from 'vue-router'
import siteHead from './components/header.vue';
</script>

<template>
  <div class="main__layout">
    <siteHead class="mHeader main__header">
    </siteHead>
    <h1 class="test">TEST</h1>
  </div>

<RouterView />
</template>

<style>
.main__layout {
  background: #2d3436;
  margin: 10px;
  width: calc(100vw - 20px);
  height: calc(100vh - 20px);
}

.mHeader {
  z-index: 999;
}

.test {
  color: #dfe6e9;
  margin: 0; padding: 20px;
}
</style>
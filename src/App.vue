<script setup>
import { RouterLink, RouterView } from 'vue-router'
import siteHead from './components/header.vue';
import animBack from './components/animBack.vue';
</script>

<template>
  <div class="main__layout">
    <siteHead class="mHeader main__header"></siteHead>
    <section class="main__corp mCorp">
      <h1 class="test">TEST</h1>

      <animBack class="main__back"></animBack>
    </section>
  </div>

<RouterView />
</template>

<style>
.main__layout {
  position: absolute;
  top: 0; left: 0;
  right: 0; bottom: 0;
  overflow: hidden;
  padding: 10px;
  background: white;
}

.mHeader {
  z-index: 999;
}

.mCorp {
  width: 100%; height: 100%;
  background: #2d3436;
  position: relative;
}


.test {
  color: #dfe6e9;
  margin: 0; padding: 20px;
}
</style>
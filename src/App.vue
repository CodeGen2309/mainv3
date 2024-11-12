<script setup>
import { RouterLink, RouterView } from 'vue-router'
import siteHead from './components/header.vue';
import animBack from './components/animBack.vue';
</script>

<template>
  <siteHead class="mHeader main__header"></siteHead> 

  <div class="main__layout">
    <RouterView v-slot="{ Component }">
      <transition name="fadeLeft">
        <component class="compAnim" :is="Component"></component>
      </transition>
    </RouterView>
  </div>
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
  z-index: 9;
}

.mCorp {
  width: 100%; height: 100%;
  background: #2d3436;
  position: relative;
}
</style>
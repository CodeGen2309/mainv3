<script setup>
import { RouterView } from 'vue-router'
import siteHead from './components/header.vue';
import { animate } from 'motion';


function transitAnim () {
  let adapter = document.querySelector('.main__adapter')

  animate(adapter, 
    { opacity: [0, 3], width: ['70%', '140%'] },
    {duration: 1.4}
  )
}
</script>

<template>
  <siteHead class="mHeader main__header"></siteHead> 

  <div class="main__layout">
    <div class="main__cover">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.mHeader { z-index: 9 }


.main__layout {
  position: absolute;
  top: 0; left: 0;
  right: 0; bottom: 0;
  overflow: hidden;
  padding: 15px;
  background: white;
}

.main__cover {
  position: relative;
  width: 100%; height: 100%;
  background: black;
}


</style>
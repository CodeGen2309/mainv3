<script setup>
let img = '/img/corp.jpg'


</script>



<template>
  <img class="videoBack" :src=img alt="">
</template>


<style scoped>

.videoBack {
  position: absolute;
  width: 100%; height: 100%;
  margin: 0; padding: 0;
  top: 0; left: 0;
  object-position: center;
  object-fit: cover;
}


</style>
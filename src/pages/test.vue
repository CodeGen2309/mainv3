<script setup>
import animCover from '@/components/animCover.vue';


let colors = [
  "rgba(0, 0, 0, .5)",
]

</script>



<template>
  <div class="frame">
    <animCover width='50%' side="right"
    />
  </div>
</template>



<style scoped>
.frame {
  position: absolute;
  width: 100%; height: 100%;
  background: cornflowerblue;
}

.test {
  color: aliceblue;
  padding: 50px 70px;
  box-sizing: border-box;
}
</style>
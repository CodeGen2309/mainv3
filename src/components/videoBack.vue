<script setup>
import { onMounted } from 'vue';

let props = defineProps({
  'video': {default: '/public/video/prolyet.mp4'}, 
  'playRate': {default: 1}
})


onMounted(() => {
  let video = document.querySelector('.testVideo')
  console.log(video);
  video.playbackRate = props.playRate ;
})

</script>


<template>
  <video class="testVideo" muted loop autoplay>
    <source  :src="video">
  </video>
</template>

<style scoped>
.testVideo {
  object-fit: cover;
  width: 100%; height: 100%;
}
</style>
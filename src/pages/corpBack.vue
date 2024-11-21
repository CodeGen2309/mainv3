<script setup>
import videoBack from '@/components/videoBack.vue';
import animCover from '@/components/animCover.vue';
import sideText from '@/components/sideText.vue';
import { animate } from 'motion';
import { onMounted } from 'vue';

let title = 'Корпорация ЖБК - 1'
let video = './video/corp.mp4'

let forGround = 'linear-gradient(to top left,  rgba(41, 128, 185, .4), rgba(0, 0, 0, .8))'
// let forGround = 'linear-gradient(to top right,  rgba(255, 165, 2,  .6), rgba(0, 0, 0, .8))'
// let forGround = 'linear-gradient(to top right,  rgba(255, 234, 167, .6), rgba(0, 0, 0, .4))'
// let forGround = '#2980b9'
// let forGround = 'rgba(41, 128, 185, .6);'

// let background = 'rgba(0, 0, 0, .5)'
let background = 'linear-gradient(to bottom left,  rgba(41, 128, 185, .8), rgba(0, 0, 0, .4))'
// let background = 'rgba(41, 128, 185, .2)'

let pageDesc = `
  70 лет Корпорация ЖБК-1 является одним из лидеров строительного рынка 
  региона. ЖБК-1 возводит дома, школы, храмы, выпускает более 10 тысяч 
  наименований качественных строительных материалов. Кроме этого, 
  корпорация ЖБК-1 является признанным в регионе предприятием с 
  высокой социальной ответственностью. Миссия Корпорации ЖБК-1 - 
  «Созидание во имя повышения качества жизни».
`

let links = [
  {text: 'Корпорация', link: '/'},
  {text: 'Недвижимость', link: '/realestate'},
  {text: 'Строительные Материалы', link: '/zavod'},
]

function enterAnim() {
  animate('.mCorp__text',
    { opacity: [0, 1], translateX: ['-100px', '0']},
    { duration: 1.3, delay: .5}
  )
}

function exitAnim() {
  animate('.mCorp__text', {opacity: [0, 1]}, {duration: 3})
}


onMounted(enterAnim)
</script>



<template>
  <section class="main__corp mCorp">
    <videoBack class="mCorp__video" video="/video/corp.mp4" />

    <animCover class="mCord__cover" :duration="2" width="60%"
      :front-color="forGround" :back-color="background"
    />

    <sideText class="mCorp__text" :title="title" :desc="pageDesc" :links="links" />
  </section>
</template>




<style scoped>
.mCorp {
  position: relative;
  width: 100%; height: 100%;
}

.mCorp__video {
  position: absolute;
  top: 0; left: 0;
}

.mCord__cover {
  position: relative;
}

.mCorp__text {
  position: absolute;
  top: 0; right: 0; bottom: 0;
  width: 45%;
  color: aliceblue;
  align-items: flex-end;
}
</style>
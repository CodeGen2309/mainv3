<script setup>
import animBack from '@/components/animBack.vue';
import videoBack from '@/components/videoBack.vue';

let title = 'Корпорация ЖБК - 1'
let pageImg = '/img/corp.jpg'
let video = './video/main-crop.mp4'

let forGround = 'linear-gradient(to top right, #2980b9, rgba(0, 0, 0, .4))'
// let background = 'linear-gradient(to top right, #2980b9, rgba(0, 0, 0, .4))'
// let forGround = '#2980b9'
// let forGround = 'rgba(41, 128, 185, .6);'
// let background = 'rgba(0, 0, 0, .5);'



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
  // {text: '', link: ''},
]

  
</script>

<template>
  <section class="main__corp mCorp">
    <animBack :title="title"
      :links="links" class="main__back" 
      :img="pageImg" :desc="pageDesc"
      :video="video" :back-color="background"
      :front-color="forGround"
    />
  </section>
</template>

<style scoped>
.main__corp {
  height: 100%; width: 100%;
}
</style>
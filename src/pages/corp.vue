<script setup>
import animBackLeft from '@/components/animBackLeft.vue';

let title = 'Корпорация ЖБК - 1'
let video = './video/corp.mp4'

let forGround = 'linear-gradient(to top right,  rgba(41, 128, 185, .4), rgba(0, 0, 0, .8))'
// let forGround = 'linear-gradient(to top right,  rgba(255, 165, 2,  .6), rgba(0, 0, 0, .8))'
// let forGround = 'linear-gradient(to top right,  rgba(255, 234, 167, .6), rgba(0, 0, 0, .4))'
// let forGround = '#2980b9'
// let forGround = 'rgba(41, 128, 185, .6);'

// let background = 'rgba(0, 0, 0, .5)'
let background = 'linear-gradient(to bottom right,  rgba(41, 128, 185, .8), rgba(0, 0, 0, .4))'
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

</script>



<template>
  <section class="main__corp mCorp">
    <animBackLeft :title="title"
      :links="links" class="mCorp__back"
      :desc="pageDesc" :video="video"
      :front-color="forGround" :back-color="background"
    />
  </section>
</template>




<style scoped>
.mCorp {
  position: relative;
  width: 100%; height: 100%;
}

.mCorp__back {
}
</style>
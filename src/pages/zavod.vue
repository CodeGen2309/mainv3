<script setup>
import animBack from '@/components/animBack.vue';

let title = 'Завод ЖБК - 1'
let pageImg = '/img/zavod.png'
let video = '/public/video/zavod-prolyet.mp4'
let forGround = 'linear-gradient(to top right, #6D6027, rgba(255, 255, 255, .7))'
let background = 'linear-gradient(to top right, #6D6027, rgba(255, 255, 255, .2))'
// let background = 'rgba(41, 128, 185, .2);'
// let background = 'rgba(0, 0, 0, .2);'
// let background = 'rgba(255, 255, 255, .3);'
// let background = 'rgba(34, 107, 156, .4);'

let playRate = 1

let pageDesc = `
  Головное предприятие Корпорации – Завод ЖБК-1 
  успешно работает на строительном рынке 70 лет и выпускает 
  более 10 тысяч наименований. Продукция производится на современных 
  европейских технологических линиях. Контроль качества 
  осуществляет собственная производственно-испытательная лаборатория 
  строительных материалов, которая оснащена новым оборудованием 
  и аттестована в установленном порядке.
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
      :video="video" :front-color="forGround"
      :back-color="background" :play-rate="playRate"
    />
  </section>
</template>


<style scoped>
  .main__corp {
    width: 100%; height: 100%;
  }
</style>
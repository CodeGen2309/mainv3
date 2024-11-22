<script setup>
import animBackLeft from '@/components/animBackLeft.vue';
import AnimBackRight from '@/components/animBackRight.vue';

let title = 'Завод ЖБК - 1'
let pageImg = '/img/zavod.png'
let video = './video/zavod.mp4'

let fronColor = 'linear-gradient(to top right, rgba(9, 132, 227, .7), rgba(0, 0, 0, .6))'
// let fronColor = 'linear-gradient(to top left, rgba(64, 115, 158, .8), rgba(0, 0, 0, .6))'
// let fronColor = 'linear-gradient(to right top, rgba(194, 54, 22, .8), rgba(0, 0, 0, .6))'
// let fronColor = 'rgba(0, 0, 0, .5);'



// let background = 'rgba(0, 0, 0, .5);'
let background = 'linear-gradient(to bottom left, rgba(64, 115, 158, .8), rgba(0, 0, 0, .2))'
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
    <animBackLeft :title="title"
      :links="links" class="main__back" 
      :img="pageImg" :desc="pageDesc"
      :video="video" :front-color="fronColor"
      :back-color="background" :play-rate="playRate"
      width="50%"
    />
  </section>
</template>


<style scoped>
  .main__corp {
    width: 100%; height: 100%;
  }
</style>
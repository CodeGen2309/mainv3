<script setup>
import animBack from '@/components/animBack.vue';


let title = 'Строительство'
let video = '/public/video/zaryaKopter.mp4'
let fronColor = 'linear-gradient(to right top, rgba(195, 20, 50, 0.6), rgba(0, 0, 0, .6))'
// let background = 'rgba(189, 195, 199, .1)'



let pageDesc = `
Корпорация ЖБК-1 - обладатель одной из самых престижных общественных наград в сфере долевого строительства -
Золотого знака «Надежный застройщик России» на территории Белгородской области.
Коллектив из 2 тысяч человек работает на 15 дочерних предприятиях и 
выполняет полный цикл работ: от проектирования и производства 
строительных материалов до сдачи объектов «под ключ» с полным комплексным 
благоустройством всех прилегающих территорий.
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
      :video="video"
      :front-color="fronColor"
    />
  </section>
</template>

<style scoped>
.main__corp {
  height: 100%; width: 100%;
}

test {
  color: rgba(195, 20, 50, 0.4);
}

</style>
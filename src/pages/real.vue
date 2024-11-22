<script setup>
import animBackRight from '@/components/animBackRight.vue';


let title = 'Строительство'
let video = './video/real.mp4'

// let frontColor = 'linear-gradient(to top left, rgba(251, 197, 49, .6), rgba(0, 0, 0, .6))'
let frontColor = 'linear-gradient(to top left, rgba(230, 126, 34, .6), rgba(0, 0, 0, .8))'
// let frontColor = 'linear-gradient(to top left, rgba(155, 89, 182, .3), rgba(0, 0, 0, .8))'
// let frontColor = 'rgba(0, 0, 0, .7)'




// let background = 'rgba(0, 0, 0, .3)'
// let background = 'rgba(195, 20, 50, 0.2)'
// let background = 'linear-gradient(to bottom left, rgba(251, 197, 49, .6), rgba(0, 0, 0, .6))'
let background = 'linear-gradient(to bottom left, rgba(230, 126, 34, .4), rgba(0, 0, 0, .3))'
// let background = 'linear-gradient(to bottom left, rgba(155, 89, 182, .6), rgba(0, 0, 0, .3))'





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
    <animBackRight :title="title"
      :links="links" class="main__back" 
      :img="pageImg" :desc="pageDesc"
      :video="video" :back-color="background"
      :front-color="frontColor"
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
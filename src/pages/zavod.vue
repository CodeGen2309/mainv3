<script setup>
import { animate, stagger, timeline } from 'motion';
import { onMounted } from 'vue';

let img = '/img/corp.jpg'

let links = [
  {text: 'Недвижимость', link: '/'},
  {text: 'Строительные Материалы', link: '/zavod'},
  // {text: '', link: ''},
]


function startAnim () {
  let covers = document.querySelectorAll('.vBack__cover')
  let textCover = document.querySelector('.vBack__content')
  let textItems = document.querySelectorAll('.vCont_anim')

  let skewAnim = [covers, { skewX: '20deg' }]
  let coverAnim = [
    covers, 
    { translateX: ['-100%', 0] },
    { duration: 1.5, delay: stagger(.2) }
  ]

  let textAnim = [
    textItems, 
    { opacity: [0, 1], translateY: [100, 0] },
    { duration: 1, delay: stagger(.1) }
  ]

  timeline([skewAnim, coverAnim, textAnim], {delay: 0.3})
}



onMounted(startAnim)

</script>



<template>
  <div class="vBack">
    <img src="/img/zavod.png" class="vBack__img">

    <div class="vBack__cover vBack__cover_first"></div>
    <div class="vBack__cover vBack__cover_second"></div>
    <div class="vBack__cover vBack__cover_third vBack__cover_text"></div>

    <div class="vBack__content vCont">
      <h1 class="vCont__title vCont_anim">Завод ЖБК - 1</h1>

      <p class="vCont__desc vCont_anim">
        Головное предприятие Корпорации – Завод ЖБК-1 успешно работает на 
        строительном рынке 70 лет и выпускает более 10 тысяч наименований.
        Продукция производится на современных европейских технологических линиях. 
        Контроль качества осуществляет собственная производственно-испытательная лаборатория 
        строительных материалов, которая оснащена новым оборудованием и 
        аттестована в установленном порядке.
      </p>

      <div class="vCont__buttons vCont_anim">
        <a v-for="l in links" :href="l.link"
          :key="l.text" class="vCount__buttonItem">
          {{ l.text }}
        </a>
      </div>
    </div>
  </div>
</template>


<style scoped>

.vBack {
  position: relative;
  width: 100%; height: 100%;
  overflow: hidden;
}

.vBack__img {
  position: absolute;
  width: 100%; height: 100%;
  object-position: center;
  object-fit: cover;
}

.vBack__cover  {
  position: absolute;
  top: 0; left: -20%;
  width: 70%; 
  height: 100%;
  background: rgba(0, 0, 0, .5); 
  /* background: rgba(255, 255, 255, .5);  */
}

.vBack__cover_first {
  width: calc(70% + 100px);
}


.vBack__cover_second {
  width: calc(70% + 50px);
}

.vBack__content {
  position: absolute;
  top: 0; left: 0;
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 60px;

  padding: 60px 40px;
  box-sizing: border-box;
  color: aliceblue;
  /* color: black; */
}

.vCont {}

.vCont__title {
  position: relative;
  margin: 0; padding: 0;
  font-size: 30px;
  font-family: zekton;
  letter-spacing: 3px;
  font-weight: 300;
  transition: .3s;
}

.vCont__title::before {
  content: '';
  width: 100%; height: 100%;
  top: 0; left: 0;
  position: absolute;
  border-bottom: 1px solid rgba(255, 255, 255, .5);
  border-right: 1px solid rgba(255, 255, 255, .5);
  transform: translateX(30px) translateY(5px);
}


.vCont__title::after {
  content: '';
  width: 100%; height: 100%;
  top: 0; left: 0;
  position: absolute;
  border-bottom: 1px solid rgba(255, 255, 255, .5);
  border-right: 1px solid rgba(255, 255, 255, .5);
  transform: translateX(35px) translateY(10px);
}

.vCont__desc {
  font-size: 20px;
  margin: 0; padding: 0;
  font-weight: 400;
  letter-spacing: 2px;
  /* color: rgba(255, 255, 255, .8); */
  transition: .3s;
}

.vCont__buttons {
  display: flex;
  justify-content: center;
  gap: 30px;
  /* padding-top: 60px; */
}

.vCount__buttonItem {
  position: relative;
  display: block;
  color: Black;
  text-decoration: none;
  /* font-weight: 600; */
  color: aliceblue;
  font-size: 18px;
  background: rgba(255, 255, 255, .3);
  border: 1px solid rgba(255, 255, 255, 1);
  padding: 20px 40px;
  transition: .3s;
  font-family: zekton;
}

.vCount__buttonItem::after {
  content: '';
  position: absolute;
  width: 100%; height: 100%;
  top: 4px; left: 4px;
  /* background: green; */
  border-bottom: 1px solid rgba(255, 255, 255, .6);
  border-right: 1px solid rgba(255, 255, 255, .6);
  transition: .3s;
}

.vCount__buttonItem:hover {
  background: white;
  transform: translateX(-4px) translateY(-4px);
  color: black;
}

</style>
<script setup>
// --------------------------
import { animate, stagger, timeline } from 'motion';
import { onMounted, getCurrentInstance } from 'vue';
import videoBack from './videoBack.vue';
import router from '@/router';


let props = defineProps({
  'links': {default: []}, 
  'img': {default: ''}, 
  'title': {default: 'test title'}, 
  'desc': {default: 'test desc'},
  'backColor': {default: 'rgba(0, 0, 0, .5)'},
  'frontColor': {default: 'rgba(0, 0, 0, .5)'},
  'video': {default: '/public/video/prolyet.mp4'},
  'playRate': {default: '0.7'}
})

let globals  = getCurrentInstance().appContext.config.globalProperties




function startAnim () {
  let covers, textItems, image, textCover

  covers = document.querySelectorAll('.vBack__cover')
  textItems = document.querySelectorAll('.vCont_anim')
  image = document.querySelector('.vBack__img')
  
  animate(covers, { skewX: '20deg' })
  animate(image, { opacity: 1 }, {duration: 2} )

  animate(
    covers, 
    { translateX: ['-90%', '0'], opacity: [0, 1] },
    { duration: 1.5, delay: stagger(0.3) },
    // { duration: 1.2, delay: .5 }
  )


  animate(
    textItems, 
    { 
      opacity: [0, 1], 
      translateX: ['50px', '0'] 
    },
    { duration: 1, delay: .5 }
  )
}


function gotoLink (link) {
  let background, textHolder, textCover

  background = document.querySelectorAll('.vBack__cover')
  textCover = document.querySelectorAll('.vBack__cover_third')
  textHolder = document.querySelectorAll('.vBack__content')

  animate(
    textHolder, 
    { 
      translateX: '30px',
      scale: '1.02',
      opacity: 0
    },
    { duration: 1 }
  )

  animate(textCover, { opacity: 0 }, { duration: .5 })

  animate(
    background, 
    { 
      width: '150%',
      background: 'rgba(0, 0, 0, 1)'
    },
    { duration: 1 }
  )

  setTimeout(() => {
    router.push({ path: link, replace: true })
  }, 800);

}


onMounted(startAnim)
</script>



<template>
  <div class="vBack">
    <videoBack class="vBack__img" :video="props.video" :play-rate="playRate"
    />

    <div class="vBack__cover vBack__cover_first vBack__cover_empty"
      :style="`background: ${backColor}`"
    ></div>

    <div class="vBack__cover vBack__cover_second vBack__cover_empty"
      :style="`background: ${backColor}`"
    ></div>

    <div class="vBack__cover vBack__cover_third"
      :style="`background: ${frontColor}`"
    ></div>

    <div class="vBack__content vCont">
      <h1 class="vCont__title vCont_anim">{{ title }}</h1>
      <p class="vCont__desc vCont_anim">{{ desc }}</p>

      <div class="vCont__buttons vCont_anim">
        <p v-for="l in links" :to="l.link"
          @click="gotoLink(l.link)"
          :key="l.text" class="vCount__buttonItem">
          {{ l.text }}
        </p>
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
  opacity: 0;
}

.vBack__cover  {
  position: absolute;
  top: 0; left: -20%;
  opacity: 0;
  width: 70%; 
  height: 100%;
}

.vBack__cover_first {
  width: calc(70% + 100px);
}


.vBack__cover_second {
  width: calc(70% + 50px);
}

.vBack__cover_third {
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
  transition: .3s;
}

.vCont__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 20px 30px ;
}

.vCount__buttonItem {
  position: relative;
  display: block;
  text-decoration: none;
  margin: 0; padding: 0;
  background: rgba(255, 255, 255, .2);
  border: 1px solid rgba(255, 255, 255, .6);
  padding: 20px 40px;
  transition: .3s;
  font-family: zekton;
}

.vCount__buttonItem::after {
  content: '';
  position: absolute;
  width: 100%; height: 100%;
  top: 4px; left: 4px;
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
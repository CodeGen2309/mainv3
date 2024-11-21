<script setup>
import { reactive } from 'vue';

  let props = defineProps({
    'title': {default: 'test title'}, 
    'desc':  {default: 'test desc'},
    'align':  {default: 'end'},

    'links': {default: [
      {text: 'test link', link: '/'},
    ]},
  })

</script>


<template>
  <div class="vCont" >
    <h1 class="vCont__title" :style="{'align-self': align}">
      {{ title }}
    </h1>

    <p class="vCont__desc" :style="{'text-align': align}">
      {{ desc }}
    </p>

    <div class="vCont__buttons" :style="{'justify-content': align}">
      <p v-for="l in links" :to="l.link"
        @click="$emit('buttonClick', l.link)"
        :key="l.text" class="vCont__buttonItem">
        {{ l.text }}
      </p>
    </div>
  </div>  
</template>



<style>
.vCont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  box-sizing: border-box;
}

.vCont__title {
  position: relative;
  padding: 0; margin: 0;
  margin-right: 40px;
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
  justify-content: right;
  gap: 20px 30px ;
}

.vCont__buttonItem {
  position: relative;
  display: block;
  text-decoration: none;
  margin: 0; padding: 0;
  background: rgba(255, 255, 255, .2);
  border: 1px solid rgba(255, 255, 255, .6);
  padding: 15px 30px;
  transition: .3s;
  font-family: zekton;
}

.vCont__buttonItem::after {
  content: '';
  position: absolute;
  width: 100%; height: 100%;
  top: 4px; left: 4px;
  border-bottom: 1px solid rgba(255, 255, 255, .6);
  border-right: 1px solid rgba(255, 255, 255, .6);
  transition: .3s;
}

.vCont__buttonItem:hover {
  background: white;
  transform: translateX(-4px) translateY(-4px);
  color: black;
}
</style>
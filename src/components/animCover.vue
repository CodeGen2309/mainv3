<script setup>
  import { onMounted } from 'vue';
  import { animate, stagger } from 'motion';

  let props = defineProps({
    'width':       {default: '50%'},
    'frontColor':  {default: 'rgba(0, 0, 0, .5)'},
    'backColor':   {default: 'rgba(0, 0, 0, .5)'},
    'step':        {default: 10},
    'duration':    {default: 3},
    'delay':       {default: 0},
    'side':        {default: 'right'},
  })

  function leftAnim () {
    animate(
      '.aCover__decor',
      {skewX: '20deg'},
      { duration: 0 }
    )

    animate(
      '.aCover__decor',
      { translateX: ['-90%', '-20%'], opacity: [0, 1] },
      { duration: 1, delay: stagger(0.2) }
    )  
  }

  function rightAnim () {
    animate(
      '.aCover__decor',
      {skewX: '-20deg'},
      { duration: 0 }
    )

    animate(
      '.aCover__decor',
      { translateX: ['120%', '20%'], opacity: [0, 1] },
      { duration: 1, delay: stagger(0.2) }
    )  
  }

  onMounted(() => {
    if (props.side == 'left') { leftAnim() }
    if (props.side == 'right') { rightAnim() }
  })
</script>


<template>

<div class="aCover">
  <div v-for="i in [1, 2]" :key="i"
    class="aCover__decor"
    :class="`aCover__decor_${props.side}`"
    :style="{
      'background': props.backColor,
      'width': `calc(${props.width} + ${i * props.step}px)`,
    }"
  ></div>

  <div class="aCover__decor"
    :class="`aCover__decor_${props.side}`"
    :style="{
      'background': props.frontColor,
      'width': props.width,
    }"
  ></div>
</div>
</template>


<style scoped>
.aCover {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.aCover__decor {
  position: absolute;
  top: 0; bottom: 0;
}

.aCover__decor_left  { left: 0;  }
.aCover__decor_right { right: 0; }
</style>
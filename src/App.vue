<script setup lang="ts">
import Layout from "./layout/layout.vue";
import {onMounted, onUnmounted} from 'vue';

// 将设计稿宽度分成的份数
const divisions = 24;

function setRem() {
  const html = document.documentElement;
  const windowWidth = window.innerWidth;
  const baseFontSize = windowWidth / divisions;
  html.style.fontSize = `${baseFontSize}px`;
}

onMounted(() => {
  setRem();
  window.addEventListener('resize', setRem);
});

onUnmounted(() => {
  window.removeEventListener('resize', setRem);
});
</script>

<template>
  <div class="layout">
    <img class="bg" src="./assets/png/main.jpg" alt="">
    <Layout></Layout>
  </div>
</template>

<style scoped>
.layout {
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  box-shadow: inset 3rem 1rem 6.5rem 1.6rem #000000e6, inset -3rem -1rem 6.5rem 1.6rem #000000e6;
  display: flex;
  flex-direction: column;
}

.bg {
  position: absolute;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  z-index: -100;
}

</style>

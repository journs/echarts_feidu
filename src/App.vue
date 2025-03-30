<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <img class="bg" src="./assets/png/main.jpg" alt="">
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
  display: flex
;
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

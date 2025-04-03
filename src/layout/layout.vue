<template>
  <div class="security_layout">
    <router-view/>
  </div>
  <Footer/>
</template>

<script setup>
import Footer from "@/components/Footer"
</script>

<style scoped>
.security_layout {
  width: 100%;
  height: 100%;
  padding: 0 .225rem;
  margin-top: 0.25rem;
  display: flex;
  justify-content: space-between;
}
</style>

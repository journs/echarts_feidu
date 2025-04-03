<template>
  <div class="security_layout">
    <transition
        name="route-slide"
        mode="out-in"
    >
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </transition>
  </div>
  <Footer/>
</template>

<script setup>
import Footer from "@/components/Footer";
</script>

<style>
.security_layout {
  width: 100%;
  height: 100%;
  padding: 0 .225rem;
  margin-top: 0.25rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

/* 定义左右滑动动画 */
.route-slide-leave-active {
  animation: slideOut 0.5s ease-out;
}

.route-slide-enter-active {
  animation: slideIn 0.5s ease-out;
}

@keyframes slideOut {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

/* 左侧组件特殊处理（从右向左滑动） */
.route-slide-leave-active .left {
  animation: slideOutLeft 0.5s ease-out;
}

.route-slide-enter-active .left {
  animation: slideInLeft 0.5s ease-out;
}

@keyframes slideOutLeft {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}

@keyframes slideInLeft {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

/* 右侧组件特殊处理（从左向右滑动） */
.route-slide-leave-active .right {
  animation: slideOutRight 0.5s ease-out;
}

.route-slide-enter-active .right {
  animation: slideInRight 0.5s ease-out;
}

@keyframes slideOutRight {
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
}

@keyframes slideInRight {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}
</style>
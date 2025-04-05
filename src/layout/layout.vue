<template>
  <div class="security_layout">
    <router-view v-slot="{ Component }">
      <transition
          name="route-slide"
          mode="out-in"
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
      >
        <component :is="Component" :key="$route.path"/>
      </transition>
    </router-view>
  </div>
  <Footer/>
</template>

<script setup>
import Footer from "@/components/Footer";
import { ref } from 'vue';

const elRef = ref(null);

// 公共动画处理函数
const handleAnimation = (el, direction, isLeft) => {
  const keyframes = direction === 'enter' ?
      [
        { transform: isLeft ? 'translateX(-100%)' : 'translateX(100%)', opacity: 0 },
        { transform: 'translateX(0)', opacity: 1 }
      ] :
      [
        { transform: 'translateX(0)', opacity: 1 },
        { transform: isLeft ? 'translateX(-100%)' : 'translateX(100%)', opacity: 0 }
      ];

  return el.animate(keyframes, {
    duration: 500,
    easing: 'ease-out',
    fill: 'forwards'
  });
};

const beforeEnter = (el) => {
  elRef.value = el;
  const leftEl = el.querySelector('.left');
  const rightEl = el.querySelector('.right.pr');

  leftEl.style.transform = 'translateX(-100%)';
  leftEl.style.opacity = 0;

  rightEl.style.transform = 'translateX(100%)';
  rightEl.style.opacity = 0;
};

const enter = (el, done) => {
  const leftEl = el.querySelector('.left');
  const rightEl = el.querySelector('.right.pr');
  const animations = [];

  leftEl && animations.push(handleAnimation(leftEl, 'enter', true));
  rightEl && animations.push(handleAnimation(rightEl, 'enter', false));

  Promise.all(animations.map(ani => new Promise(resolve => ani.onfinish = resolve)))
      .then(done);
};

const leave = (el, done) => {
  const leftEl = el.querySelector('.left');
  const rightEl = el.querySelector('.right.pr');
  const animations = [];

  leftEl && animations.push(handleAnimation(leftEl, 'leave', true));
  rightEl && animations.push(handleAnimation(rightEl, 'leave', false));

  Promise.all(animations.map(ani => new Promise(resolve => ani.onfinish = resolve)))
      .then(done);
};
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

.community-management-container {
  width: 100%;
  display: flex;
}

.left {
  width: 50%;
}

.right {
  width: 50%;
}
</style>
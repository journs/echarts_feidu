<template>
    <div class="bottom">
      <div class="bottom-center">
        <!-- 通过 :class 动态绑定类名，:class="{ 'fontColor': index === butIndex }" 实现根据点击状态添加类名 -->
        <button class="item" v-for="(but, index) in buttonList" :key="index" @click="handleButtonClick(but.path, index)" :class="{ 'fontColor': index === butIndex }">
          {{but.name}}
        </button>
      </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

// 初始化当前选中按钮的索引为 0
let butIndex = ref(0);
let buttonList = [
  {name: '社区管理', path: '/community-management'},
  {name: '安保监控', path: '/security-monitoring'},
  {name: 'CIM平台', path: '/cim-platform'},
  {name: '能源检测', path: '/energy-detection'},
  {name: '节能分析', path: '/energy-saving-analysis'}
];

const router = useRouter();

const handleButtonClick = (path, index) => {
  // 更新选中按钮的索引
  butIndex.value = index;
  // 进行路由跳转
  router.push(path);
};
</script>

<style scoped lang="less">
* {
  padding: 0;
}

.bottom {
  width: 24rem;
  position: absolute;
  bottom: .35rem;
  height: .6375rem;
  display: flex;
  justify-content: center;

  .bottom-center {
    width: 9.1375rem;
    display: flex;
    justify-content: space-around;

    .item {
      cursor: pointer;
      width: 1.475rem;
      height: .6375rem;
      background-color: transparent;
      text-align: center;
      line-height: .6375rem;
      border: .0125rem solid #4b5ccd;
      color: #fff;
      font-size: .3rem;
    }

    /* 直接使用 CSS 选择器 */

    .item:nth-child(1) {
      transform: skew(20deg);
    }

    .item:nth-child(2) {
      transform: skew(10deg);
    }

    .item:nth-child(3) {
      transform: skew(0deg);
    }

    .item:nth-child(4) {
      transform: skew(-10deg);
    }

    .item:nth-child(5) {
      transform: skew(-20deg);
    }

    /* 定义点击后按钮的颜色样式 */

    .fontColor {
      color: #2db8cc !important;
    }
  }
}

</style>
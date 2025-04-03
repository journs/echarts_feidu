import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index.ts';
import 'echarts';
import ECharts from 'vue-echarts';
console.log(ECharts)
const app = createApp(App);
// 在 Vue 3 中全局注册组件
app.component('VueEcharts', ECharts);
app.use(router);
app.mount('#app');

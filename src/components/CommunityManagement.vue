<template>
  <div class="community-management-container">
  <div class="left pl slide-in-left">
    <div class="all shadow">
      <div class="title">
        <img class="image" src="@/assets/png/img/titleImg.png" alt="">
        <div>摄像头概述总览</div>
      </div>
      <div class="item">
        <img src="@/assets/png/img/title.png" alt="" class="image">
        <div class="text">
          <span style="color: #5391fd;
    font-size: .175rem;
    line-height: .175rem;
    margin-bottom: .0625rem;">当前社区总人数</span>
          <span style="    color: #9dceff;
    font-size: .275rem;
    line-height: .3rem;">12530</span>
        </div>
        <div class="text_1">
          <span
              style="color: #6d9ff1;background-color: #383a56;font-size: .175rem !important;padding: 0 .0875rem;height: .2875rem;line-height: .2875rem;">黑名单</span>
          <span style="color: #9dceff;font-size: .175rem !important;">25</span>
        </div>
      </div>
      <div class="item_1">
        <div class="item_title" v-for="item in arr">
          <div class="text">{{ item.name }}</div>
          <div style="color: rgb(157, 206, 243); font-size: 0.175rem;">{{ item.value }}</div>
        </div>
      </div>
    </div>
    <div class="list shadow">
      <div class="title">
        <img src="@/assets/png/img/titleImg.png" alt="" class="image">
        <div>报警信息列表</div>
      </div>
      <div class="content">
        <div v-for="(item, index) in alarmList" :key="index" class="item">
          <div class="left"></div>
          <div class="right">
            <div class="ct_1">
              <span>{{ item.location }}</span>
              <span
                  :class="{
            'back_2': item.status === '已消警',
            'back_1': item.status === '处理中'
          }"
                  class="span"
              >{{ item.status }}</span>
            </div>
            <div class="ct_2">
              {{ item.time }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="right pr slide-in-right">
    <div class="right_1 shadow">
      <div class="title">
        <img src="@/assets/png/img/titleImg.png" alt="" class="image">
        <div>黑名单数据</div>
      </div>
      <div class="content">
        <div class="item">
          <img class="av" src="@/assets/png/img/user.png" alt="">
        </div>
        <div class="item">
          <div class="text">近一个月出现黑名单次数</div>
        </div>
        <div class="item" style="    font-size: .45rem !important;
    color: #25c7ff;height: 1rem;">
          <div style="    font-size: 0.5rem !important;">754</div>
        </div>
      </div>
    </div>
    <div class="right_2_sum shadow">
      <div class="right_2">
        <div class="title">
          <img src="@/assets/png/img/titleImg.png" alt="" class="image">
          <div>超时访客数据</div>
        </div>
        <!-- 添加ECharts图表容器 -->
        <div class="chart-container">
          <div id="data_content">
            <vue-echarts :option="columnChartOption" auto-resize class="column-chart"/>
          </div>
        </div>
      </div>
      <div class="huan">
        <div class="title">
          <img src="@/assets/png/img/titleImg.png" alt="" class="image">
          <div>超时访客数据</div>
        </div>
        <!-- 添加ECharts图表容器 -->
        <div class="chart-container">
          <div id="data_content">
            <vue-echarts :option="pieChartOption" auto-resize class="column-chart"/>
          </div>
        </div>
      </div>
      <div class="right_2">
        <div class="title">
          <img src="@/assets/png/img/titleImg.png" alt="" class="image">
          <div>报警数据</div>
        </div>
        <div class="chart-container">
          <div id="data_content">
            <vue-echarts :option="lineChartOption" auto-resize class="column-chart"/>
          </div>
        </div>
      </div>
    </div>

  </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import * as echarts from 'echarts';
import yzImage from '@/assets/png/img/yz.png';

const lineChartOption = ref({
  grid: {
    top: '20%', // 增加顶部间距，给标题留空间
    bottom: '25%', // 调整底部间距，平衡布局
    left: '15%', // 增大左侧间距，避免左侧文字被挡
    right: '5%'
  },
  title: {
    text: '近一月报警次数 单位：{whiteText|次数/天}',
    left: 'center',
    textStyle: {
      color: '#3d79da',
      fontSize: 12,
      rich: {
        whiteText: {color: '#fff'}
      }
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['6-27', '6-28', '6-29', '6-30', '7-1', '7-2', '7-3', '7-4', '7-5'],
    axisLine: {lineStyle: {color: '#4c5c7a'}},
    axisTick: {show: false},
    axisLabel: {color: '#9dceff'}
  },
  yAxis: {
    type: 'value',
    max: 70,
    splitLine: {
      lineStyle: {type: 'dashed', color: '#d5e0ec'}
    },
    axisLine: {lineStyle: {color: '#4c5c7a'}},

    axisLabel: {
      color: '#9dceff',
      margin: 5, // 增加标签与轴线的间距，避免遮挡
      fontSize: 6 // 缩小Y轴标签字体
    }
  },
  series: [
    {
      name: '报警次数',
      type: 'line',
      data: [20, 30, 40, 65, 55, 50, 45, 35, 10],
      lineStyle: {
        color: 'rgba(114, 101, 230, 0.8)', // 折线颜色添加透明度（原#7265E6）
        width: 2
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {
                offset: 0,
                color: 'rgba(114, 101, 230, 0.5)' // 起始色透明度（原#7265E6）
              },
              {
                offset: 1,
                color: 'rgba(64, 133, 162, 0.5)' // 结束色透明度（原#4085a2）
              }
            ]
        )
      },
      symbol: 'circle',
      symbolSize: 8,
      itemStyle: {color: '#FF6B81'}
    }
  ]
});
// 新建饼图配置变量
const pieChartOption = ref({
  graphic: [
    // 添加中间图片
    {
      type: 'image',
      left: 'center',
      bottom: '30%', // 改为百分比更灵活，或直接写像素值如 40
      style: {
        image: yzImage,
        width: 25,
        height: 25
      }
    },
    // 添加中间文字
    {
      type: 'text',
      left: 'center',
      top: 'center',
      style: {
        text: '业主关怀',
        fontSize: 14,
        fill: '#fff',
        textAlign: 'center'
      }
    }
  ],
  legend: {
    orient: 'vertical',
    right: -5,
    itemWidth: 20,
    itemHeight: 15,
    textStyle: {color: '#9dceff'}
  },
  tooltip: {
    trigger: 'item',
    formatter: (params) => {
      switch (params.name) {
        case '长期':
          return `长期空置 ${params.value} 次`;
        case '小孩':
          return `小孩独自出门超时 ${params.value} 次`;
        case '老人':
          return `老人单独出门超时 ${params.value} 次`;
        default:
          return `${params.name} ${params.value}`;
      }
    }
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      center: ['50%', '50%'],
      data: [
        {value: 40, name: '长期', itemStyle: {color: '#4C81DD'}},
        {value: 140, name: '长期', itemStyle: {color: '#41E8D7'}},
        {value: 200, name: '小孩', itemStyle: {color: '#C05BDE'}},
        {value: 350, name: '老人', itemStyle: {color: '#65D186'}},
      ],
      label: {show: false},
      labelLine: {show: false}
    }
  ]
});


// 列
const columnChartOption = ref({
  title: {
    text: '近一周访客超时楼栋分布',
    left: 'center',
    textStyle: {
      color: '#3d79da',
      fontSize: 18
    }
  },
  grid: {
    left: 0,
    right: 0,
    top: '25%',
    bottom: 0,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['6-27', '6-28', '6-29', '6-30', '7-1', '7-2', '7-3'],
    axisTick: {alignWithLabel: false},
    axisLine: {
      lineStyle: {type: 'dashed'}
    },
    axisLabel: {
      color: '#9dceff', // 修改Y轴标签颜色
      fontSize: 6 // 缩小Y轴标签字体
    }
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
    splitNumber: 4, // 减少分割线数量，拉开间隔
    axisLabel: {
      color: '#9dceff', // 修改Y轴标签颜色
      fontSize: 6 // 缩小Y轴标签字体
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        width: 1,
        dashOffset: 200,
      }
    }
  },
  series: [
    {
      name: '超时次数',
      type: 'bar',
      data: [20, 50, 200, 300, 390, 330, 200],
      itemStyle: {
        color: (params: any) => {
          // 判断 dataIndex 奇偶性
          if (params.dataIndex % 2 === 0) {
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {offset: 0, color: '#4C81DD'}, // 第一个颜色（偶数索引柱子）
              {offset: 1, color: '#4C81DD'}
            ]);
          } else {
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {offset: 0, color: '#3CEDE3'}, // 第二个颜色（奇数索引柱子）
              {offset: 1, color: '#3CEDE3'}
            ]);
          }
        }
      }
    }
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {type: 'shadow'}
  }
});

// 动态计算 y 轴最大值
const seriesData = columnChartOption.value.series[0].data;
const dataMax = Math.max(...seriesData);
const yAxisMax = Math.ceil(dataMax / 100) * 100; // 向上取整到最近的 100 倍数

// 更新配置
columnChartOption.value.yAxis.max = yAxisMax;
let arr = [
  {
    name: '业主人数',
    value: '12530'
  }, {
    name: '访问人数',
    value: '12530'
  }, {
    name: '外来人数',
    value: '12530'
  },
]
const alarmList = [
  {
    location: '监控1:大西门云台',
    status: '待派遣',
    time: '07:12:18'
  },
  {
    location: '监控2:A楼南侧',
    status: '处理中',
    time: '07:13:12'
  },
  {
    location: '监控3:T9北侧',
    status: '已消警',
    time: '08.12 18'
  },
  {
    location: '监控4:大西门云台',
    status: '待派遣',
    time: '07:12:18'
  },
  {
    location: '监控5:A楼南侧',
    status: '处理中',
    time: '07:13:12'
  },
  {
    location: '监控6:T9北侧',
    status: '已消警',
    time: '08:12:18'
  },
  {
    location: '监控7:大西门云台',
    status: '待派遣',
    time: '07:12:18'
  },
  {
    location: '监控8:A楼南侧',
    status: '处理中',
    time: '07:13:12'
  },
  {
    location: '监控9:T9北门',
    status: '已消警',
    time: '08:12:18'
  }]
</script>

<style scoped>
.community-management-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 4.85rem;
  padding-left: .125rem;
  padding-top: .125rem;

  .all {
    width: 4.7375rem;
    height: 2.075rem;
    margin-bottom: .075rem;

    .title {
      height: .3375rem;
      width: 100%;
      display: flex;
      font-size: .225rem;
      color: #6d9ff1;

      .image {
        width: .25rem;
        height: .3375rem;
        margin-right: .2625rem;
      }
    }

    .item {
      height: .9625rem;
      width: 100%;
      padding-left: .25rem !important;
      display: flex;
      align-items: center;

      .image {
        width: .7125rem;
        height: .7125rem;
        margin-right: .9rem !important;
      }

      .text {
        margin-right: .875rem;
        height: .7125rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .text_1 {
        width: .7rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    .item_1 {
      font-size: .1625rem;
      height: .75rem !important;
      padding-left: .275rem;
      width: 120% !important;
      display: flex;
      flex-wrap: nowrap;

      .item_title {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: .6625rem;

        .text {
          background-image: linear-gradient(to right, #147ba4, #4e4a9d);
          font-size: .15rem !important;
          height: .25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1rem;
          padding: 0 .1rem;

        }
      }


    }
  }

  .list {
    height: 7.7625rem;
    padding-right: .2875rem;

    .title {
      height: .3375rem;
      width: 100%;
      display: flex;
      font-size: .225rem;
      color: #6d9ff1;
      margin-bottom: .1875rem;

      .image {
        width: .25rem;
        height: .3375rem;
        margin-right: .2625rem;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      height: 6.5rem !important;
      overflow: auto;

      &::-webkit-scrollbar {
        width: .0625rem;
      }

      &::-webkit-scrollbar-thumb {
        height: 3.75rem;
        background: linear-gradient(to bottom, #0000, #3d4eac, #0000);
        border-radius: .075rem;
      }

      &::-webkit-scrollbar-track {
        background-color: #0000;
      }

      .item {
        margin-bottom: .0625rem;
        color: #c0ccc0;
        display: flex;
        padding-left: .0625rem;
        height: .735rem;

        .left {
          width: .225rem;
          background-color: #11467c;
        }

        .right {
          width: 4.85rem;
          height: 100%;
          display: flex;
          flex-direction: column;

          .ct_1 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: .375rem;
            padding-left: .2125rem;
            background-color: #0000004d;

            .span {
              font-size: .15rem;
              display: flex;
              align-items: center;
              justify-content: center;
              line-height: .275rem;
              background-color: #673ab7;
              border-radius: .05rem;
              width: .625rem;
              height: .275rem;
              margin-right: .1875rem;
              color: rgb(255, 255, 255);
            }
          }

          .ct_2 {
            flex: 1;
            padding-left: .2125rem;
          }
        }
      }
    }
  }
}

.right {
  width: 4.85rem;

  .right_1 {
    width: 4.85rem;
    padding-left: .1rem;
    padding-top: .125rem;

    .title {
      height: .3375rem;
      width: 100%;
      display: flex;
      font-size: .225rem;
      color: #6d9ff1;

      .image {
        width: .25rem;
        height: .3375rem;
        margin-right: .2625rem;
      }
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .25rem .425rem .1rem .225rem !important;

      .av {
        width: .675rem;
        height: .675rem;
      }

      .text {
        text-align: center;
        line-height: .4125rem;
        height: .4125rem;
        width: 2.2rem;
        background-color: #222431;
        font-size: .175rem !important;
        color: #fff;
      }
    }
  }

  .right_2_sum {
    width: 4.85rem;
    padding-top: .125rem;
    padding-left: .1rem;
    margin-top: .1rem;
    height: auto;

  }

  .right_2 {
    width: 4.85rem;
    height: 2.975rem;

    .title {
      height: .3375rem;
      width: 100%;
      display: flex;
      font-size: .225rem;
      color: #6d9ff1;

      .image {
        width: .25rem;
        height: .3375rem;
        margin-right: .2625rem;
      }
    }

    .chart-container {
      height: 2.975rem;
      width: 100%;

      #data_content {
        height: 100%;
        width: 100%;
        padding: .075rem .425rem .3875rem .225rem;
      }
    }
  }

  .huan {
    width: 4.85rem;
    height: 2.575rem;

    .title {
      height: .3375rem;
      width: 100%;
      display: flex;
      font-size: .225rem;
      color: #6d9ff1;

      .image {
        width: .25rem;
        height: .3375rem;
        margin-right: .2625rem;
      }
    }

    .chart-container {
      height: 2.975rem;
      width: 100%;

      #data_content {
        height: 100%;
        width: 100%;
        padding: .075rem .425rem .3875rem .225rem;
      }
    }

  }

}

.shadow {
  box-shadow: 0 0 .0425rem .0175rem #0000001a;
}

.back_1 {
  background-color: #409eff !important;
}

.back_2 {
  background-color: #3f51b5 !important;
}
</style>

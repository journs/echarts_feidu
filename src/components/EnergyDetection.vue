<template>
  <div class="community-management-container">
    <div class="left pl slide-in-left">
      <div class="all shadow" v-for="() in 4">
        <div class="title">
          <img class="image" src="@/assets/png/img/titleImg.png" alt="">
          <div>4#天棚热泵主机</div>
        </div>
        <div>
          <div class="content">
            <div class="item">
              <img src="@/assets/png/img/gl.png" alt="" class="image">
              <div class="text">
                <div class="text_title">功率</div>
                <div class="text_value">211.8</div>
              </div>
            </div>
            <div class="item">
              <img src="@/assets/png/img/dl.png" alt="" class="image">
              <div class="text">
                <div class="text_title">电量</div>
                <div class="text_value">272322.2</div>
              </div>
            </div>
          </div>
          <div style="padding-left: .25rem !important;display:flex;margin-bottom:0.1875rem;">
            <div class="ct_item2">
              <div class="ct_item2_s1">机组运行工况</div>
              <div class="ct_item2_s2">炙热</div>
            </div>
            <div class="ct_item2">
              <div class="ct_item2_s1">机组运行状态</div>
              <div class="ct_item2_s2 run">运行</div>
            </div>
          </div>
          <div style="padding-left: .25rem !important;display:flex;margin-bottom:0.1875rem;">
            <div class="ct_item2">
              <div class="ct_item2_s1">c1启动状态</div>
              <div class="ct_item2_s2">启动</div>
            </div>
            <div class="ct_item2">
              <div class="ct_item2_s1">c2启动状态</div>
              <div class="ct_item2_s2 run">启动</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right pr slide-in-right">
      <div class="right_1 shadow">
        <el-select clearable v-model="value" placeholder="请选择">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="right_2_sum shadow">
        <div class="huan">
          <div class="title">
            <img src="@/assets/png/img/titleImg.png" alt="" class="image">
            <div>三相电压</div> <!-- 这里将标题改为效果图对应的内容 -->
          </div>
          <!-- 添加ECharts图表容器 -->
          <div class="chart-container">
            <div id="data_content">
              <vue-echarts :option="barChartOption" auto-resize class="column-chart"/>
            </div>
          </div>
        </div>
        <div class="right_2">
          <div class="title">
            <img src="@/assets/png/img/titleImg.png" alt="" class="image">
            <div>三项电流</div>
          </div>
          <div class="chart-container">
            <div id="data_content">
              <vue-echarts :option="lineChartOption" auto-resize class="column-chart"/>
            </div>
          </div>
        </div>
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
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import * as echarts from 'echarts';

const value = ref('')

const options = [
  {
    value: 'test1',
    label: 'test1',
  },
]


const lineChartOption = ref({
  grid: {
    top: '20%', // 增加顶部间距，给标题留空间
    bottom: '25%', // 调整底部间距，平衡布局
    left: '15%', // 增大左侧间距，避免左侧文字被挡
    right: '5%'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['6-27', '6-28', '6-29', '6-30', '7-1', '7-2', '7-3', '7-4', '7-5'],
    axisLine: {
      lineStyle: {
        color: '#4c5c7a'
      }
    },
    axisTick: {show: true},
    axisLabel: {color: '#9dceff', interval: 0,fontSize:8}
  },
  yAxis: {
    type: 'value',
    max: 70,
    interval: 10,
    splitLine: {
      lineStyle: {
        type: 'dashed', color: 'rgba(213,224,236,0.76)',
        width: 2,
        dashOffset: 200,
      }
    },
    axisLine: {
      lineStyle: {
        color: '#4c5c7a'
      }
    },
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
const barChartOption = ref({
  // 其他配置保持不变
  grid: {
    left: '10%',
    right: '10%',
    bottom: '10%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    axisLine: {lineStyle: {color: '#4c5c7a'}},
    axisTick: {show: false},
    axisLabel: {
      color: '#9dceff'
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#4c5c7a'
      }
    }
  },
  yAxis: {
    type: 'category',
    data: ['1', "2", '3', "4", '5', "6", '7'],
    axisLine: {lineStyle: {color: '#4c5c7a'}},
    // 开启y轴刻度线
    axisTick: {
      show: true,
      lineStyle: {
        color: '#4c5c7a', // 刻度线颜色
        width: 1,        // 刻度线宽度
        type: 'solid'    // 刻度线类型，这里是实线
      }
    },
    axisLabel: {
      color: '#9dceff', interval: 0 // 强制显示所有刻度标签
    }
  },
  series: [
    {
      name: '1',
      type: 'bar',
      barWidth: '80%', // 设置柱状图宽度为类目宽度的 30%
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {offset: 0, color: '#3d79da'},
            {offset: 1, color: '#c864c2'}
          ]
        }
      },
      data: [300, 100, 120, 350, 220, 100, 290, 350, 150, 100, 300, 200, 130, 190]
    },
  ]
});


// 列
const columnChartOption = ref({
  grid: {
    left: 0,
    right: 0,
    top: '15%',
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
        width: 2,
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

    .content {
      display: flex;
      margin-bottom: .075rem;

      .item {
        height: .9625rem;
        padding-left: .25rem !important;
        display: flex;
        align-items: center;

        .image {
          width: .7125rem;
          height: .7125rem;
          margin-right: .2rem !important;
        }

        .text {
          height: .7125rem;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .text_title {
            font-size: .1625rem;
            color: #9dceff;
          }

          .text_value {
            font-size: .275rem !important;
            color: #fff;
          }
        }

      }
    }

    .ct_item2 {
      width: 1.9625rem;
      height: .325rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: .25rem;

      .ct_item2_s1 {
        color: #fff;
      }

      .ct_item2_s2 {
        height: .325rem;
        width: .5rem;
        color: black;
        background-color: #e19f40;
        text-align: center;
        line-height: .325rem;
      }
    }

    .run {
      background-color: #00d5b8 !important;
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
      width: 100%;
      height: 2.975rem;

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

:deep(.el-select__wrapper) {
  color: #fff !important;
  background-color: #0000;
  box-shadow: 0 0 0 1px #4051d3 inset;
  height: .7rem;
}
</style>

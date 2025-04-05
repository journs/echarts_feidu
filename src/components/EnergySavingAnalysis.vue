<template>
  <div class="community-management-container">
    <div class="left pl slide-in-left">
      <div class="all shadow">
        <div class="title">
          <img class="image" src="@/assets/png/img/titleImg.png" alt="">
          <div>当代能效标识</div>
        </div>
        <div class="item_1">
          <div class="row_1">
            <div class="item1">低</div>
            <div class="item2" v-for="() in 5"></div>
            <div class="item3">高</div>
            <div class="item4">一级</div>
          </div>
          <div class="chart-container">
            <div id="data_content">
              <vue-echarts :option="cameraChartOption" auto-resize class="column-chart"/>
            </div>
            <div class="data_right">
              <div class="item_2">总负荷：32kw%</div>
              <div data-v-d48e3eef="" class="item_3">32%</div>
              <div data-v-d48e3eef="" class="item_4">总能耗：53.685kw</div>
              <div data-v-d48e3eef="" class="item_5">53.685%</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right_2">
        <div class="title">
          <img src="@/assets/png/img/titleImg.png" alt="" class="image">
          <div>系统费用统计</div>
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
          <div>各类型费用占比</div>
        </div>
        <!-- 添加ECharts图表容器 -->
        <div class="chart-container">
          <div id="data_content">
            <vue-echarts :option="pieChartOption" auto-resize class="column-chart"/>
          </div>
        </div>
      </div>
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
    </div>
    <div class="right pr slide-in-right">
      <div class="data_2">
        <div class="title">
          <img src="@/assets/png/img/titleImg.png" alt="" class="image">
          <div>能源数据概况</div>
        </div>
        <div class="content">
          <div class="item" v-for="item in itemArr">
            <div class="energy">{{ item.title }}</div>
            <div class="text">{{ item.value }}</div>
          </div>
        </div>
      </div>
      <div class="right_2_sum">
        <div class="right_2">
          <div class="title">
            <img src="@/assets/png/img/titleImg.png" alt="" class="image">
            <div>系统能效概况</div>
          </div>
          <div class="chart-container">
            <div id="data_content">
              <vue-echarts :option="lineChartOption" auto-resize class="column-chart"/>
            </div>
          </div>
        </div>
        <div class="data_run">
          <div class="title">
            <img src="@/assets/png/img/titleImg.png" alt="" class="image">
            <div>运行相关数据</div>
          </div>
          <div class="content">
            <div class="header">
              <div class="c_1">名称</div>
              <div class="c_1">总电量</div>
              <div class="c_1">总电费</div>
              <div class="c_1">总负荷</div>
              <div class="c_1">平均能耗</div>
            </div>
            <div class="Tbody">
              <div class="row" v-for="i in 10" :class="{'row_select': i%2==0}">
                <div class="cell">天棚主机</div>
                <div class="cell">10462.7</div>
                <div class="cell">5620.3</div>
                <div class="cell">1.8</div>
                <div class="cell">2.3</div>
              </div>
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

let itemArr = [
  {
    title: "本月总能耗 (单位：kw.h)",
    value: 11787
  },
  {
    title: "本年总能耗 (单位:kw.h)",
    value: 210688
  },
  {
    title: "本日总负荷 (单位:kw.h)",
    value: 73779
  },
  {
    title: "本年平均能耗 (单位:kw.h)",
    value: 10127
  },
  {
    title: "本日总电费 (单位:元)",
    value: 5646
  },
  {
    title: "本年总电费 (单位:元)",
    value: 203231
  }]

const barChartOption = ref({
  // 其他配置保持不变
  grid: {
    left: '10%',
    right: '10%',
    bottom: '10%',
    top: '20%',
    containLabel: true
  },
  legend: {
    textStyle: {color: '#9dceff'}
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
    data: ['当前', "最低", '最高', "初始",],
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
      name: '地热平衡',
      type: 'bar',
      barWidth: '35%', // 设置柱状图宽度为类目宽度的 30%
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
      data: [100, 80, 120, 150]
    },
    {
      name: '节能环保',
      type: 'bar',
      barWidth: '35%', // 设置柱状图宽度为类目宽度的 30%
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {offset: 0, color: '#1BB2E0'},
            {offset: 1, color: '#1BCB9C'}
          ]
        }
      },
      data: [50, 60, 20, 160]
    },
  ]
});


const cameraChartOption = ref({
  series: [
    {
      name: '覆盖区域',
      type: 'pie',
      left: -20,
      top: -20,
      radius: ['35%', '50%'], // 调整环形大小，内半径50%，外半径70%
      startAngle: 40, // 起始角度（从顶部开始）
      endAngle: 140, // 结束角度（80%对应的角度：360*0.8=288）
      label: {
        show: true,
        position: 'center',
        formatter: function (params: any) {
          return `{title|${params.name}}\n{percent|${params.value}%}`;
        },
        rich: {
          title: {
            fontSize: 10,
            fontWeight: 'bold',
            color: '#3C6279'
          },
          percent: {
            fontSize: 12,
            color: '#28DECD',
            fontWeight: 'bold'
          }
        }
      },
      data: [
        {value: 80, name: '覆盖区域'}
      ],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {offset: 0, color: '#2C5879'},
          {offset: 1, color: '#2AE3D0'}
        ])
      }
    }
  ],
  /*  // 右侧数据显示
    graphic: [
      {
        type: 'text',
        left: '45%',
        top: '10%',
        style: {
          text: '覆盖区域显示',
          fontSize: 10,
          fill: '#fff'
        }
      },
      {
        type: 'group',
        left: '45%', // 右移到70%位置
        top: '20%',
        children: [
          {
            type: 'text',
            style: {
              text: '人脸识别区域: 32%',
              fontSize: 10,
              fill: '#fff'
            }
          },
        ]
      },
      {
        type: 'group',
        left: '45%', // 右移到70%位置
        top: '30%',
        children: [
          {
            cursor: 'defaults',
            type: 'rect',
            left: 'center',
            top: 'center',
            shape: {
              width: 40,
              height: 12
            },
            style: {
              fill: '#1abc9c' // 绿色填充色
            }
          },
          {
            cursor: 'defaults',
            type: 'text',
            left: -5,
            top: 'center',
            style: {
              textAlign: 'right',
              fill: '#fff',
              text: '32%', // 显示32%
              font: 6 // 调整字体大小
            }
          }
        ]
      },
      {
        type: 'group',
        left: '45%', // 右移到70%位置
        top: '40%',
        children: [
          {
            type: 'text',
            style: {
              text: '可控摄像头区域: 53.685%',
              fontSize: 10,
              fill: '#fff'
            }
          },
        ]
      },
      {
        type: 'group',
        left: '45%', // 右移到70%位置
        top: '50%',
        children: [
          {
            cursor: 'defaults',

            type: 'rect',
            left: 'center',
            top: 'center',
            shape: {
              width: 80,
              height: 12
            },
            style: {
              fill: '#1abc9c' // 绿色填充色
            }
          },
          {
            cursor: 'defaults',
            type: 'text',
            top: 'center',
            left: -5,
            style: {
              fill: '#fff',
              text: '53.685%', // 显示32%
              font: 6 // 调整字体大小
            }
          }
        ]
      }
    ]*/
});

const lineChartOption = ref({
  grid: {
    left: 0,
    right: '5%',
    top: '15%',
    bottom: 0,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['6-27', '6-28', '6-29', '6-30', '7-1', '7-2', '7-3', '7-4', '7-5'],
    axisLine: {lineStyle: {color: '#4c5c7a'}},
    axisTick: {show: true},
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
      left: '25%',
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
      left: '20%',
      top: '42%',
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
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      center: ['30%', '50%'],
      data: [
        {value: 40, name: '天棚主机', itemStyle: {color: '#3951F2'}},
        {value: 70, name: '天棚水泵', itemStyle: {color: '#1BCA9B'}},
        {value: 80, name: '新风主机', itemStyle: {color: '#3BDAD1'}},
        {value: 100, name: '新风水泵', itemStyle: {color: '#6060FF'}},
        {value: 80, name: '地源水泵', itemStyle: {color: '#08B5F2'}},
        {value: 60, name: '冷却水泵', itemStyle: {color: '#C304FF'}},
      ],
      label: {show: false},
      labelLine: {show: false}
    }
  ]
});


// 列
const columnChartOption = ref({
  title: {
    text: '元/天',
    left: '30',
    textStyle: {
      color: '#3d79da',
      fontSize: 12
    }
  },
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
      fontSize: 10 // 缩小Y轴标签字体
    }
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
    splitNumber: 4, // 减少分割线数量，拉开间隔
    axisLabel: {
      color: '#9dceff', // 修改Y轴标签颜色
      fontSize: 10 // 缩小Y轴标签字体
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
      padding-top: .175rem;
      padding-left: .25rem;

      .row_1 {
        height: .3rem;
        align-items: center;
        display: flex;
      }

      .item1 {
        color: #fff;
        margin-right: .1625rem;
        font-size: .1625rem;
      }

      .item2 {
        width: .4125rem;
        height: .175rem;
        border: .0125rem solid #6767fd;
        margin-right: .1875rem;
      }

      .item3 {
        color: #fff;
        margin-right: .1625rem;
        font-size: .1625rem;
      }

      .item4 {
        width: .5625rem;
        height: .2125rem;
        background-color: #08b4f2;
        border: none;
        text-align: center;
        line-height: .2125rem;
        color: #fff;
        font-size: .1625rem;
      }

    }

    .data_right {
      margin-top: .2rem;

      .item_1 {
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .item_2 {
        font-size: .15rem !important;
        margin-bottom: .1rem;
      }

      .item_3 {
        font-size: .15rem !important;
        margin-bottom: .125rem;
        width: .7rem;
        text-align: right;
        background-color: #0e8f87;
        height: .1875rem;
        padding-right: .05rem;
        line-height: .1875rem;
      }

      .item_4 {
        font-size: .15rem !important;
        margin-bottom: .125rem;
      }

      .item_5 {
        font-size: .15rem !important;
        height: .1875rem;
        width: 1.1875rem !important;
        background-color: #0e8f87;
        padding-right: .05rem;
        text-align: right;
        line-height: .1875rem;
      }
    }

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
      height: 1.975rem;
      width: 100%;
      display: flex;

      #data_content {
        height: 100%;
        width: 50%;
      }
    }

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

.right {
  width: 4.85rem;

  .data_2 {
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
      padding-top: .0625rem;
      flex-wrap: wrap;
      padding-left: .25rem;

      .item {
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-basis: 40%;
        height: .85rem;
        margin-left: .1rem;

        .energy {
          font-size: .175rem !important;
          width: 2rem;
          height: .375rem;
          text-align: center;
          line-height: .375rem;
        }

        .text {
          height: .2875rem;
          line-height: .2875rem;
          font-size: .2875rem;
          color: #24c0f7;
        }
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

  .data_run {
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
      .header {
        display: flex;
        color: #24c0f7;

        .c_1 {
          flex: 1;
          text-align: center;
        }
      }

      .Tbody {
        display: flex;
        flex-direction: column;
        height: 4.1125rem;
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
      }

      .row {
        padding:  0.1rem 0;
        display: flex;
        gap: 0.1rem;
        border-bottom: 1px solid #444; /* 行分隔线 */
      }

      .cell {
        flex: 1;
        text-align: center;
      }
    }
  }


}

.shadow {
  box-shadow: 0 0 .0425rem .0175rem #0000001a;
}
.row_select{
background-color: rgba(55, 113, 130, 0.6);
}
</style>

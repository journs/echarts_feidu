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
          <div class="text_1">
            <span class="s1">摄像头总数量</span>
            <span class="s2">53</span>
          </div>
        </div>
        <div class="item_1">
          <div class="item_title" v-for="item in arr">
            <div class="text">
              <img class="img" :src="getImageSource(item.src)" alt="默认描述"/>

              {{ item.name }}
            </div>
            <div style="color: rgb(157, 206, 243); font-size: 0.175rem;">{{ item.value }}</div>
          </div>
        </div>
      </div>
      <div class="right_2 shadow">
        <div class="title">
          <img src="@/assets/png/img/titleImg.png" alt="" class="image">
          <div>摄像头覆盖占比</div>
        </div>
        <div class="chart-container">
          <div id="data_content">
            <vue-echarts :option="cameraChartOption" auto-resize class="column-chart"/>
          </div>
          <div class="data_right">
            <div class="item_1">
              <div> 覆盖区域显示</div>
              <el-switch
                  v-model="switchValue"
                  style="--el-switch-on-color: #32375f;--el-switch-off-color: #32375f;"
              />
            </div>
            <div class="item_2">人脸识别区域：32%</div>
            <div data-v-d48e3eef="" class="item_3">32%</div>
            <div data-v-d48e3eef="" class="item_4">可控摄像头区域：53.685%</div>
            <div data-v-d48e3eef="" class="item_5">53.685%</div>
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
      <div class="list shadow">
        <div class="title">
          <img src="@/assets/png/img/titleImg.png" alt="" class="image">
          <div>摄像头概述总览</div>
        </div>
        <div class="content">
          <div class="item" v-for="() in 9">
            <img src="@/assets/png/img/p9.png" alt="" class="image"/>
            <div class="text">星关广场云台</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import * as echarts from 'echarts';

let switchValue = ref(false);
//摄像头覆盖占比
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


// 处理图片路径的函数
const getImageSource = (src: string) => {
  return new URL(`../assets/png/img/${src}`, import.meta.url).href;
};


let arr = [
  {
    src: 'yz.png',
    name: '人脸识别摄像头',
    value: '8'
  }, {
    src: "fy.png",
    name: '可控制摄像头',
    value: '20'
  }, {
    src: "dl.png",
    name: '故障摄像头',
    value: '2'
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
        margin-right: .3rem !important;
      }


      .text_1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .s1 {
          color: #5391fd;
          font-size: .175rem;
          line-height: .175rem;
          margin-bottom: .0625rem;
        }

        .s2 {
          color: #9dceff;
          font-size: .325rem;
          line-height: .3rem;
        }
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
        margin-right: .1625rem;

        .text {
          background-image: linear-gradient(to right, #147ba4, #4e4a9d);
          font-size: .15rem !important;
          height: .25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 .1rem;
        }

        .img {
          width: .15rem;
          height: .15rem;
          margin-right: .1125rem;
        }
      }


    }
  }

  .right_2 {
    width: 4.75rem;
    height: 2.975rem;

    .data_right {
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
      height: 2.975rem;
      width: 100%;
      display: flex;

      #data_content {
        height: 100%;
        width: 50%;
        padding: .075rem 0 .3875rem .225rem;
      }
    }
  }

  .list {
    height: 5.225rem;
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
      height: 3.85rem !important;
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

  .list {
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
      flex-wrap: wrap;
      height: 9.4rem;
      overflow: auto;
      width: 4.4125rem;
      padding: .25rem 0 0 .25rem;
      gap: .15rem;

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
        flex-basis: 40%;
        color: #fff;
        text-align: center;
        display: flex;
        flex-direction: column;
        width: 1.9625rem;
        height: 2.15rem;
        margin-bottom: .15rem;

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

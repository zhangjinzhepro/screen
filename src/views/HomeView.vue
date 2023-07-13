<script setup lang="ts">
import {reactive, ref} from "vue";

import {toDate} from 'wanado/src/sources/toDate'
import VEarth from "@/views/Earth.vue";
import VShandong from "@/views/shandong.vue";

const options = {
  color: ['#fac858'],
  legend:{
    show:true,
    data :['9610', '9710'],
    top: 75,
    textStyle: {
      fontFamily: 'Arial',
      fontSize: 13,
      fill: '#ffffff'
    }
  },
  xAxis: {
    data: ['八月', '九月', '十月', '十一月', '十二月', '一月', '二月', '三月', '四月', '五月', '六月', '七月',],
    axisLine:{
      style: {
        stroke: '#009EFF',
        lineWidth: 2
      }
    },
    axisTick:{
      style: {
        stroke: '#00FFF6',
        lineWidth: 1
      }
    },
    axisLabel:{
      style: {
        fill: '#ffffff',
        fontSize: 10,
        rotate: 0
      }
    },
  },
  yAxis: {
    data: 'value',
    name: '万 / 美元',
    minInterval: 1000,
    maxInterval: 1000,
    nameTextStyle:{
      fill: '#ffffff'
    },
    axisLine:{
      style: {
        stroke: '#009EFF',
        lineWidth: 2
      }
    },
    axisTick:{
      style: {
        stroke: '#00FFF6',
        lineWidth: 1
      }
    },
    axisLabel:{
      style: {
        fill: '#ffffff',
        fontSize: 10,
        rotate: 0
      }
    },
    splitLine: {
      show: false,
      style: {
        stroke: '#DDE6ED',
        lineWidth: 1
      }
    }
  },
  grid:{
    top: 90,
    left: 60,
    right: 40,
    bottom: 40
  },
  series: [
    {
      name:'9610',
      data: [479, 716, 2461, 5598, 1982, 1655, 3853, 2244, 2904, 2803, 1580, 1669],
      type: 'bar',
      stack: 'a',
      label: {
        show: true,
        style:{
          fill: '#ffffff',
        },
      },
    },
    {
      name:'9710',
      data: [132, 1716, 3461, 1598, 1982, 1655, 1853, 2244, 1904, 2803, 7580, 669],
      type: 'bar',
      stack: 'a',
      label: {
        show: true,
        style:{
          fill: '#ffffff',
        },
      },
    },
  ]
}
const option1 = {
  color: '#fac858',
  lineWidth: 24,
  unit: '万美元',
  data: [
    {
      name: '青岛海诺铸业有限公司',
      value: 345.532,
    },
    {
      name: '青岛亚澳工业品制造有限公司',
      value: 335.602,
    },
    {
      name: '青岛双星轮胎工业有限公司',
      value: 235.506
    },
    {
      name: '青岛百瑞工具有限公司',
      value: 215.502,
    },
    {
      name: '青岛泰发集团进出口有限公司',
      value: 205.572,
    },
    {
      name: '青岛明月海藻集团有限公司',
      value: 187.506,
    },
    {
      name: '青岛经控物流科技有限公司',
      value: 165.522,
    },
    {
      name: '青岛佰纺寝装用品有限公司',
      value: 143.502,
    },
    {
      name: '青岛远飞宠物食品有限公司',
      value: 112.000,
    },
    {
      name: '青岛镜旺宠物食品有限公司',
      value: 101.000,
    },
  ],
}
const option2 = {
  color: ['#fac858', '#009EFF'],
  legend:{
    show:true,
    data :['9610', '9710'],
    top: 75,
    textStyle: {
      fontFamily: 'Arial',
      fontSize: 13,
      fill: '#ffffff'
    }
  },
  xAxis: {
    data: ['八月', '九月', '十月', '十一月', '十二月', '一月', '二月', '三月', '四月', '五月', '六月', '七月',],
    axisLine:{
      style: {
        stroke: '#009EFF',
        lineWidth: 2
      }
    },
    axisTick:{
      style: {
        stroke: '#00FFF6',
        lineWidth: 1
      }
    },
    axisLabel:{
      style: {
        fill: '#ffffff',
        fontSize: 10,
        rotate: 0
      }
    },
  },
  yAxis: {
    data: 'value',
    name: '单',
    max: 8000,
    minInterval: 1000,
    maxInterval: 1000,
    nameTextStyle:{
      fill: '#ffffff'
    },
    axisLine:{
      style: {
        stroke: '#009EFF',
        lineWidth: 2
      }
    },
    axisTick:{
      style: {
        stroke: '#00FFF6',
        lineWidth: 1
      }
    },
    axisLabel:{
      style: {
        fill: '#ffffff',
        fontSize: 10,
        rotate: 0
      }
    },
    splitLine: {
      show: false,
      style: {
        stroke: '#DDE6ED',
        lineWidth: 1
      }
    }
  },
  grid:{
    top: 100,
    left: 60,
    right: 40,
    bottom: 40
  },

  series: [
    {
      name: '9610',
      data: [479, 716, 2461, 7598, 1982, 1655, 1853, 2244, 2904, 2803, 1580, 669],
      type: 'line',
      smooth: true,
      lineArea: {
        show: true
      }
    },
    {
      name: '9710',
      data: [1353, 564, 2376, 2386, 2348, 3578, 4575, 6548, 3432, 4564, 2478, 553],
      type: 'line',
      smooth: true,
      lineArea: {
        show: true
      }
    },
  ]
}
const option3 = {
  series: [
    {
      type: 'pie',
      radius: 90,
      data: [
        { name: '美国', value: 93 },
        { name: '孟加拉国\n', value: 32 },
        { name: '加拿大\n', value: 65 },
        { name: '刚果\n', value: 44 },
        { name: '英国\n', value: 52 },
      ],
      insideLabel: {
        show: true,
        style: {
          fontSize: 16,
          fill: '#fff',
          textAlign: 'center',
          textBaseline: 'middle'
        }
      },
      outsideLabel:{
        style: {
          fontSize: 16,
          fill: '#fff',
        }
      }
    }
  ]
}
const option4 = {
  series: [
    {
      type: 'pie',
      radius: 90,
      data: [
        { name: '手推车', value: 10 },
        { name: '宠物食品', value: 7 },
        { name: '假睫毛', value: 4 },
        { name: '铁质建材', value: 3 },
        { name: '原料', value: 1 },
      ],
      insideLabel: {
        show: true,
        style: {
          fontSize: 16,
          fill: '#fff',
          textAlign: 'center',
          textBaseline: 'middle'
        }
      },
      outsideLabel:{
        style: {
          fontSize: 16,
          fill: '#fff',
        }
      }
    }
  ]
}
const config1 = {
  header: ['日期', '企业', '出口国家', '出口商品', '贸易额'],
  headerBGC: '#37a2da',
  data: [
    ['2023/6/3', '金华星', '美国', '蹦床', '<span style="color:red;">30895</span>'],
    ['2023/6/4', '金华星', '美国', '蹦床', '<span style="color:red;">34638</span>'],
    ['2023/6/5', '金华星', '美国', '蹦床', '<span style="color:red;">6453</span>'],
    ['2023/6/6', '金华星', '美国', '蹦床', '<span style="color:red;">6748</span>'],
    ['2023/6/7', '金华星', '美国', '蹦床', '<span style="color:red;">2463</span>'],
    ['2023/6/8', '金华星', '美国', '蹦床', '<span style="color:red;">68543</span>'],
    ['2023/6/9', '金华星', '美国', '蹦床', '<span style="color:red;">241</span>'],
    ['2023/6/10', '金华星', '美国', '蹦床', '<span style="color:red;">421</span>'],
    ['2023/6/11', '金华星', '美国', '蹦床', '<span style="color:red;">34634</span>'],
    ['2023/6/12', '金华星', '美国', '蹦床', '<span style="color:red;">346312</span>'],
    ['2023/6/16', '金华星', '美国', '蹦床', '<span style="color:red;">783535</span>'],
    ['2023/6/17', '金华星', '美国', '蹦床', '<span style="color:red;">12312</span>'],
    ['2023/6/19', '金华星', '美国', '蹦床', '<span style="color:red;">45623</span>'],
    ['2023/6/20', '金华星', '美国', '蹦床', '<span style="color:red;">8534</span>'],
    ['2023/6/24', '金华星', '美国', '蹦床', '<span style="color:red;">138946</span>'],
    ['2023/6/25', '金华星', '美国', '蹦床', '<span style="color:red;">51235</span>'],
  ],
  // index: true,
  columnWidth: [100, 200, 100, 100, 100],
  align: ['center','center','center','center','center'],
}

const timer = ref('')
setInterval(()=>{
  const date = new Date().getTime()
  timer.value = toDate(date)
}, 1000)

</script>

<template>
  <dv-full-screen-container>
<!--    <v-earth></v-earth>-->
  </dv-full-screen-container>
  <dv-full-screen-container class="main">
    <div class="time position-fixed" style="right: 0; top: 25px">
      <dv-button border="Border3" color="#c8161d" font-color="#e18a3b" fontSize="12">{{ timer }}</dv-button>
    </div>
    <h1 style="margin: 10px 0 -10px;" class="fw-bold">青云通公共服务平台数据监控中心</h1>
    <dv-decoration5 :dur="5" class="m-auto" style="width:80%;height:40px;" />
    <div class="d-flex flex-wrap justify-content-around">
      <div class="d-flex w33 flex-column">
        <dv-border-box11 title="出口贸易额累计" :title-width="400" :animate="false" class=" h300">
          <div dv-bg class="h-100">
            <dv-charts :option="options"/>
          </div>
        </dv-border-box11>
        <dv-border-box11 title="出口目的国TOP5" :title-width="400" :animate="false" class=" h300">
          <div dv-bg class="position-relative w-100 h-100">
            <dv-charts :option="option3" class="w-100 h-100" style="margin-top: 35px"/>
          </div>
        </dv-border-box11>
        <dv-border-box11 title="出口商品种类TOP5" :title-width="400" :animate="false" class=" h300">
          <div dv-bg class="position-relative w-100 h-100">

            <dv-charts :option="option4" class="w-100 h-100" style="margin-top: 35px"/>
          </div>
        </dv-border-box11>

      </div>
      <div class="d-flex w33 flex-column">
        <dv-border-box1 class="position-relative h600" :animate="false">
          <div dv-bg class="w-100 p-2 position-absolute z-3" style="top: -20px">
            <div class="d-flex justify-content-between fw-bold my-2 fs-2 align-items-end" >
              <dv-decoration1 style="width:150px;height:50px;" />
              <div>
                <div class="fs-4">全球贸易出口区域</div>
              </div>
              <dv-decoration1 style="width:150px;height:50px;" />
            </div>
            <div class="d-flex justify-content-end">
              <dv-button @click="console.log('click')" border="Border5" color="#e18a3b">全球出口贸易总额: <span class="text-danger fs-6 fw-bold">3.7亿美元</span></dv-button>
            </div>
          </div>
          <v-earth></v-earth>
        </dv-border-box1>
        <dv-border-box11 title="入驻企业区域分布" :title-width="400" :animate="false" class="h300 p-4 pt-5">
          <v-shandong></v-shandong>
        </dv-border-box11>
      </div>
      <div class="d-flex w33 flex-column">
        <dv-border-box11 title="出口单量" :title-width="400" :animate="false" class=" h300">
          <div dv-bg class="h-100">
            <dv-charts :option="option2"/>
          </div>
        </dv-border-box11>
        <dv-border-box11 title="入驻企业贸易总额排名" :title-width="400" :animate="false" class="h300">
          <div dv-bg class="py-5 px-4">
            <dv-scroll-ranking-board :config="option1" style="width: 100%;height:230px" />
          </div>
        </dv-border-box11>
        <dv-border-box11 title="实时申报看板" :title-width="400" :animate="false" class=" h300">
          <div dv-bg class="py-5 px-4">
            <dv-scroll-board :config="config1" class="pt-2" style="height: 220px"/>
          </div>
        </dv-border-box11>
      </div>
    </div>
  </dv-full-screen-container>
</template>

<style scoped lang="scss">
.main{
  //background: #000000;
  h1{
    text-align: center;
    //color: #FFFFFF;
  }
}
</style>

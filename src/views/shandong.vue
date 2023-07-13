<script lang="ts">
export default {
  name: 'V-Shandong',
  inheritAttrs: false,
}
</script>

<script setup lang="ts">

import * as echarts from 'echarts';
import {onMounted} from "vue";

import axios from "axios";

let chart = {}

onMounted(async ()=>{
  const {data} = await axios.request({
    url: 'https://geo.datav.aliyun.com/areas_v3/bound/370000_full.json',
  })
  echarts.registerMap("sd", {geoJson: data});
  chart = echarts.init(document.getElementById('s'));
  initShandong()
})

const initShandong = ()=>{
  chart.setOption({
    geo:{
      map: 'sd',
      zoom: 2,
      label: {
        show: true
      },
      silent: true,
      roam: true,
      itemStyle:{
        areaColor: '#a6ddff'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (param: any,ticket: any, callback: any) {
        return `${param.name}:  ${param.data.aa} 家`
      },
    },
    series: [
      {
        name: 'scatter',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: [
          // { name: '青岛市', value: [120, 36.05,123123], symbolSize: 50, aa: '122222' },
          { name: '潍坊市', value: [119.1, 36.62], symbolSize: 23, aa: '4' },
          { name: '济南市', value: [117.1, 36.62], symbolSize: 26, aa: '5' },
        ],
        itemStyle: {
          shadowBlur: 3,
          // color: '#fac858'
        },
      },
      {
        name: 'effectScatter',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: [
          { name: '青岛市', value: [120, 36.05, 123123], symbolSize: 30, aa: '210' },
        ],
        itemStyle: {
          shadowBlur: 3,
          color: '#fac858'
        },
      }
    ]
  });
}


</script>

<template>
  <div id="s"></div>
</template>

<style scoped>
#s{
  height: 100%;
  width: 100%;
}
</style>

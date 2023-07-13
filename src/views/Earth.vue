<script lang="ts">
export default {
  name: 'V-Earth',
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import * as echarts from 'echarts';
import {onMounted, ref} from "vue";
import 'echarts-gl';
import geoJson from '@/utils/world.json'
import bg from '@/assets/img/bg.webp'
import pageBg from '@/assets/img/pageBg.png'
import {lines, points} from "@/utils/earth";

let myChart = {}

onMounted(()=>{
  echarts.registerMap("world", {geoJson});
  myChart = echarts.init(document.getElementById('m'));
  initEarth()
})

const initEarth = ()=>{
  var canvas = document.createElement('canvas');
  var m = echarts.init(canvas, null, {
    width: 100, height: 100
  });
  m.setOption({
    geo:{
      map: 'world',
      top: 0, left: 0,
      right: 0, bottom: 0,
      boundingCoords: [[-180, 90], [180, -90]],
    },
  });
  init(m)
}
const init = (m)=>{
  const option = {
    // title: {
    //   text: 1111
    // },
    // backgroundColor: "#013954",
    tooltip: {
      trigger: "item",
    },
    globe: {
      top: 30,
      show: true,
      baseTexture: bg,
      globeRadius: 220,
      shading: "color",
      environment: pageBg,
      viewControl: {
        alpha: 30,
        beta: 160,
        targetCoord: [120.17,35.95],
        autoRotate: true,
        autoRotateAfterStill: 3,
        distance: 500,
      },
    },
    series: [
      {
        name: "lines3D",
        type: "lines3D",
        coordinateSystem: "globe",
        effect: {
          show: true,
          trailWidth: 2,
          trailLength: 2,
          trailColor: '#f8bc31'
        },
        // blendMode: "lighter",
        lineStyle: {
          width: 2,
          color: '#dddddd'
        },
        data: lines,
        silent: false,
      },
      {
        type: 'scatter3D',
        coordinateSystem: 'globe',
        blendMode: 'lighter',
        symbolSize: 2,
        itemStyle: {
          color: 'rgb(50, 50, 150)',
          opacity: 1
        },
        data: lines
      },
      {
        type: "scatter3D",
        coordinateSystem: 'globe',
        symbolSize: 5,
        data: points,
        itemStyle:{
          color: '#f8bc31'
        }
      },
    ],
  };

  myChart.setOption(option, true);
}


</script>

<template>
  <div id="m" class="m-auto"></div>
</template>

<style scoped>
#m{
  height: 97%;
  width: 95%;
}
</style>

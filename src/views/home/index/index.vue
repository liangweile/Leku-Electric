<template>
    <div class="module-box">
        <div class="box" style="flex: 0 1 100%">
            <div class="list-box" v-for="(v,index) in lists" :key=v.icon :index="index">
                <i><el-icon><component :is="v.icon"></component></el-icon></i>
                <p>{{v.title}}</p>
            </div>
        </div>
    </div>
    <div class="module-box">
        <div class="box" style="flex: 0 1 30%;margin:15px">
            <el-card style="width:100%;background-color:rgb(35, 106, 164)">
                <Chart 
                height="250px" 
                :option="chartOption1"/>
            </el-card>
        </div>
        <div class="box" style="flex: 0 1 70%;margin:15px">
            <el-card style="width:100%;background-color:rgb(35, 106, 164)">
                <Chart 
                height="250px" 
                :option="chartOption2"/>
            </el-card>
        </div>
    </div>
    <div class="module-box">
        <div class="box" style="flex: 0 1 100%;margin:15px">
            <el-card style="width:100%;background-color:rgb(35, 106, 164)">
                <Chart 
                height="400px" 
                :option="chartOption3"/>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import {ref,reactive} from 'vue'
import Chart from './chart.vue'
import {
    Monitor,
    Location,
    Van,
    DataLine,
    Setting
} from '@element-plus/icons-vue'

const lists = ref([
    {title:'电量监控',icon:Monitor},
    {title:'车辆详情',icon:Setting},
    {title:'地图分布',icon:Location},
    {title:'车辆监控',icon:Van},
    {title:'统计分析',icon:DataLine}
])

let chartOption1 = reactive({
    title: {
        text: '库存量',
        left: 'center',
        textStyle:{
            color:'#fff',
            fontSize:25
        }
    },
    tooltip: {},//鼠标移入显示
    legend: {//图例
        data: ['库存量'],
        left: 'left',
        textStyle:{
            color:'#fff',
            fontSize:20
        }
    },
    textStyle:{
            color:'#fff',
            fontSize:20
        },
    color: 'lightgreen',
    grid: {
        left: '2%',
        right: '2%',
        top: '13%',
        bottom: '2%',
        containLabel: true//区域内是否显示刻度标签
    },
    xAxis: {
                data: ['kc001', 'kc002', 'kc003', 'kc004', 'kc005', 'kc006'],
            },
            yAxis: {
            },
            series: [
                {
                    type: 'bar',//图表类型
                    data: [500, 170, 360, 650, 240, 430]
                }
            ],
})
let chartOption2 = reactive({
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期七']
  },
  yAxis: {
    type: 'value'
  },
  color: 'lightpink',
  textStyle:{
            color:'#fff',
            fontSize:20
        },
        grid: {
        left: '2%',
        right: '2%',
        top: '13%',
        bottom: '2%',
        containLabel: true//区域内是否显示刻度标签
    },
  series: [
    {
      data: [1290,820, 932,934,  1330, 901,  1320],
      type: 'line',
      areaStyle: {}
    }
  ]
})
let chartOption3 = reactive({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  color: 'orange',
  textStyle:{
            color:'#fff',
            fontSize:20
        },
  series: [
    {
      data: [1290,820, 932,934,  1330, 901,  1320],
      type: 'line',
      smooth: true
    }
  ]
})
</script>

<style>
</style>
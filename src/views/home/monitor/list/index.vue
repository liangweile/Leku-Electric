<template>
    <div class="module-box">
        <div class="box" style="flex: 0 1 100%;">
            <el-card style="width: 98%;margin:15px auto 0;background-color:rgb(35, 106, 164)">
                <p>电量监控-车辆详情</p>
            </el-card>
        </div>
    </div>
    <div class="module-box">
        <div class="box" style="flex: 0 1 100%">
            <div class="list-box" v-for="(v,k) in info" :key="k">
                <p>{{k}}</p>
                <p>{{v}}</p>
            </div>
        </div>
    </div>
    <el-table :data="tableData" style="width: 98%;margin:0 auto;">
        <el-table-column prop="date" label="充电日期"/>
        <el-table-column prop="startTime" label="充电开始时间"/>
        <el-table-column prop="startPower" label="充电开始电量" />
        <el-table-column prop="completePower" label="充电完成电量" />
    </el-table>
</template>

<script setup>
import { ref,reactive,onMounted } from 'vue';
import axios from '@/api'

let info = ref({
    "车辆自编号":"CL-888",
    "车辆号":"粤-A12045",
    "启动时间": "2024-12-08",
    "使用状态":"使用中",
    "所属公司":"广州计酬有限公司",
})
let tableData = ref([
    {
    date: '2024-03-12',
    startTime: '12:56',
    startPower: '5%',
    completePower: "100%"
  },
  {
    date: '2024-03-19',
    startTime: '10:24',
    startPower: '18%',
    completePower: "100%"
  },{
    date: '2024-03-24',
    startTime: '07:51',
    startPower: '26%',
    completePower: "100%"
  },{
    date: '2024-03-30',
    startTime: '15:56',
    startPower: '43%',
    completePower: "100%"
  },{
    date: '2024-04-02',
    startTime: '17:43',
    startPower: '8%',
    completePower: "100%"
  },{
    date: '2024-04-12',
    startTime: '18:06',
    startPower: '24%',
    completePower: "100%"
  },{
    date: '2024-04-26',
    startTime: '23:24',
    startPower: '17%',
    completePower: "100%"
  },{
    date: '2024-05-10',
    startTime: '09:43',
    startPower: '34%',
    completePower: "100%"
  },
])
onMounted(()=> {
    getMonitorInfo()
})
//获取车辆详情
async function getMonitorInfo(){
    let {data} = await axios.get('/monitor/info')
    info.value = data.result
    let {data:res} = await axios.get('/charge/query')
    tableData.value = res.result
}
</script>

<style>
p{
    color: #fff;
}
.el-table .cell{
    text-align: center;
    color: #ffffff;
}
.el-table__row:hover .cell{
    text-align: center;
    color: #941f1f;
}
.el-table th.el-table__cell.is-leaf{
    background-color: rgb(26, 99, 163);
}
.el-table tr{
    background-color: rgb(83, 194, 49);
}
</style>
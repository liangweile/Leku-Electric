<template>
    <div>
        <div ref="chart" :style="style"></div>
    </div>
</template>

<script setup>
import {ref,reactive, onMounted,computed,defineProps} from 'vue'
import * as echarts from 'echarts'
const {width,height,option} = defineProps({
    width: {
        type:String,
        default:'100%'
    },
    height:{
        type:String,
        default:'300px'
    },
    option:{
        type:Object,
        default: ()=> ({
            xAxis: {
                data: ['星期1', '星期2', '星期3', '星期4', '星期5', '星期6'],
            },
            yAxis: {
            },
            series: [
                {
                    type: 'line',//图表类型
                    data: [5, 20, 36, 15, 10, 20]
                }
            ],
        })
    }
})
const style = computed(() => ({
    width,height
}))
const chart = ref()

onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(chart.value);
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    //图表自适应
    window.addEventListener("resize", ()=>{
        myChart.resize()
    })
})
</script>
<template>
    <div class="demo-collapse">
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item :title="headerFilter(k)" :name="k" v-for="(v,k) in infoItem" :key="k">
                <div>
                {{v}}
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script setup>
import {ref,defineProps,computed} from 'vue'

let {infoItem} = defineProps({
    infoItem:{
        type:Object
    }
})
let activeName = ref('company')

//表头数据过滤处理
const headerFilter = computed(()=>item=>{
    switch(item){
        case 'company':
            return '公司'
        case 'quantity':
            return '车辆总数'
        case 'proportion1':
            return '监控车辆'
        case 'drawOut_count':
            return '出车总数'
        case 'drawOut_proportion':
            return '出车总数占比'
        default:
            return item
    }
})

</script>
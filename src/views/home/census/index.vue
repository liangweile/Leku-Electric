<template>
    <div class="module-box">
        <div class="box" style="flex: 0 1 100%">
            <div class="list-box" v-for="(v,index) in lists" :key="index">
                <p>{{v.title}}</p>
                <p>{{v.count}}</p>
            </div>
        </div>
    </div>
    <el-table
    :data="multipleSelection"
    style="width: 98%;margin:20px auto;"
    :row-class-name="tableRowClassName"
    >
        <el-table-column property="company" label="公司"/>
        <el-table-column property="quantity" label="车辆总数"/>
        <el-table-column property="proportion1" label="监控车辆"/>
        <el-table-column property="proportion2" label="监控车辆占比"/>
        <el-table-column property="drawOut_count" label="出车总数"/>
        <el-table-column property="drawOut_proportion" label="出车总数占比"/>
    </el-table>
    <el-table
    :data="tableItems"
    style="width: 98%;margin:20px auto;"
    @selection-change="handleSelectionChange"
    >
        <el-table-column type="selection" width="55" />
        <el-table-column property="company" label="公司"/>
        <el-table-column property="quantity" label="车辆总数"/>
        <el-table-column property="proportion1" label="监控车辆"/>
        <el-table-column property="proportion2" label="监控车辆占比"/>
        <el-table-column property="drawOut_count" label="出车总数"/>
        <el-table-column property="drawOut_proportion" label="出车总数占比"/>
        <el-table-column label="操作">
            <template #default="{row}">
                <el-button type="primary" @click="handleInfo(row)">
                数据分析
                </el-button>
            </template>
            </el-table-column>
    </el-table>

    <el-dialog
        v-model="dialogVisible"
        title="数据分析"
        :before-close="handleClose"
    >
        <Dialog :infoItem="infoItem"/>
        <template #footer>
        <div class="dialog-footer">
            <el-button @click="dialogVisible = false">关闭</el-button>
        </div>
        </template>
    </el-dialog>
</template>

<script setup>
import {ref,reactive,onMounted} from 'vue'
import axios from 'axios'
import Dialog from './dialog.vue'
let dialogVisible = ref(false)
const lists = ref([
    {title:'电动车总数',count:'324,352'},
    {title:'出车总数',count:'324,352'},
    {title:'监控车辆',count:'324,352'},
])
const tableItems = ref([
    {
        company:'东方有限公司',
        quantity:'839',
        proportion1:'5%',
        proportion2:'5%',
        drawOut_count:'733',
        drawOut_proportion:'59%',
    },
    {
        company:'星空有限公司',
        quantity:'726',
        proportion1:'8%',
        proportion2:'8%',
        drawOut_count:'453',
        drawOut_proportion:'35%',
    },{
        company:'东方有限公司',
        quantity:'839',
        proportion1:'5%',
        proportion2:'5%',
        drawOut_count:'733',
        drawOut_proportion:'59%',
    },{
        company:'星空有限公司',
        quantity:'726',
        proportion1:'8%',
        proportion2:'8%',
        drawOut_count:'453',
        drawOut_proportion:'35%',
    },{
        company:'东方有限公司',
        quantity:'839',
        proportion1:'5%',
        proportion2:'5%',
        drawOut_count:'733',
        drawOut_proportion:'59%',
    },{
        company:'星空有限公司',
        quantity:'726',
        proportion1:'8%',
        proportion2:'8%',
        drawOut_count:'453',
        drawOut_proportion:'35%',
    },{
        company:'东方有限公司',
        quantity:'839',
        proportion1:'5%',
        proportion2:'5%',
        drawOut_count:'733',
        drawOut_proportion:'59%',
    },{
        company:'星空有限公司',
        quantity:'726',
        proportion1:'8%',
        proportion2:'8%',
        drawOut_count:'453',
        drawOut_proportion:'35%',
    },{
        company:'东方有限公司',
        quantity:'839',
        proportion1:'5%',
        proportion2:'5%',
        drawOut_count:'733',
        drawOut_proportion:'59%',
    },{
        company:'东方有限公司',
        quantity:'839',
        proportion1:'5%',
        proportion2:'5%',
        drawOut_count:'733',
        drawOut_proportion:'59%',
    },
])
const infoItem = ref({})
const multipleSelection = ref([])
const tableRowClassName = ({
  row,
  rowIndex,
}) => {
  if (rowIndex %2 === 0) {
    return 'warning-row'
  } else if (rowIndex %2 === 1) {
    return 'success-row'
  }
  return ''
}
onMounted(async()=>{
    let res = await axios.get('data/census')
    tableData.value = res.data.result
})

//多选状态改变
const handleSelectionChange = (val) => {
    multipleSelection.value = val
}

//数据分析
const handleInfo = (row)=> {
    dialogVisible.value = true
    infoItem.value = row
}
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
<template>
     <div class="module-box">
        <div class="box" style="flex: 0 1 100%;">
            <el-card style="width: 98%;margin:15px auto 0;background-color:rgb(35, 106, 164)">
                <el-button type="success" plain @click="dialogFormVisible = true">新增车辆</el-button>
            </el-card>
        </div>
    </div>
    <el-table :data="tableData" style="width: 98%;margin:20px auto;">
        <el-table-column prop="number" label="车辆自编号"/>
        <el-table-column prop="numberplate" label="车牌号"/>
        <el-table-column prop="data" label="车辆启动时间" />
        <el-table-column prop="check" label="状态" >
            <template #default="{row}">
                <el-tag :type="row.check?'success':'danger'">
                    {{ checkFilter(row.check) }}
                </el-tag>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template #default="{row}">
                <el-button 
                size="small" 
                type="primary"
                @click="dialogVisble('update',row)">编辑</el-button>
                <el-button 
                size="small" 
                type="danger"
                @click="handleDel(row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-dialog v-model="dialogFormVisible" :title="category=='add'?'添加':'删除'">
    <el-form :model="form">
        <el-form-item label="车辆自编号">
            <el-input v-model="form.number"/>
        </el-form-item>
        <el-form-item label="车牌号">
            <el-input v-model="form.numberplate"/>
        </el-form-item>
        <el-form-item label="车辆启动时间">
            <!-- <el-data-picker 
                v-model="form.data"
                type="data"
                placeholder="Pick a data"
            /> -->
        </el-form-item>
        <el-form-item label="状态">
            <el-input v-model="form.check"/>
        </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="submit()">
        提交
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref,reactive,onMounted,computed } from 'vue';
import axios from '@/api'
import { ElNotification } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
const dialogFormVisible = ref(false)
const tableData = ref([
    {
        number: "Cl-492",
        numberplate:"鄂A1234",
        data:"2024-03-12",
        check:true,
    },
    {
        number: "Cl-492",
        numberplate:"鄂A1234",
        data:"2024-03-12",
        check:false,
    }, {
        number: "Cl-492",
        numberplate:"鄂A1234",
        data:"2024-03-12",
        check:false,
    }, {
        number: "Cl-492",
        numberplate:"鄂A1234",
        data:"2024-03-12",
        check:true,
    }, {
        number: "Cl-492",
        numberplate:"鄂A1234",
        data:"2024-03-12",
        check:false,
    }, {
        number: "Cl-492",
        numberplate:"鄂A1234",
        data:"2024-03-12",
        check:true,
    }, {
        number: "Cl-492",
        numberplate:"鄂A1234",
        data:"2024-03-12",
        check:true,
    }, {
        number: "Cl-492",
        numberplate:"鄂A1234",
        data:"2024-03-12",
        check:true,
    }, {
        number: "Cl-492",
        numberplate:"鄂A1234",
        data:"2024-03-12",
        check:false,
    }, {
        number: "Cl-492",
        numberplate:"鄂A1234",
        data:"2024-03-12",
        check:false,
    }, {
        number: "Cl-492",
        numberplate:"鄂A1234",
        data:"2024-03-12",
        check:true,
    },
])
const form = ref({})
let category = ref({})
onMounted(async()=> {
    let res = await axios.get('/data/query')
    tableData.value = res.result
})

const filterHandle = (value,row,column)=>{
    const property = column['property']
    return row[property] === value
}

//状态格式化
const checkFilter = computed(()=>item=>{
    switch(item){
        case true:
            return '正常'
        case false:
            return '异常'
        default:
            return '异常'
    }
})

//日期格式化
const dataFormat = computed(()=>item=>{
    const d = new Date(item)
    const data = `${d.getFullYear()}-${(d.getMonth()+1)}-${d.getDate()}`
    return date
})

//筛选自编号
const numberFilter = computed(()=> {
    return tableData.value.map(v=>({
        text:v.number,
        value:v.number
    }))
})

//添加或编辑触发
const dialogVisble = (state,row)=>{
    category.value = state
    dialogFormVisible.value = true
    state=='add'?form.value = {}:form.value = {...row}
}

//添加或编辑数据提交
const submit = async()=> {
    dialogFormVisible.value = false
    let method =category.value=='add'?'post':'put'
    let {data} = await axios({
        method:method,
        url:`/data/$(category.value)`,
        data:form.value
    })
    if(data.code == 200){
        getList()
        ElNotification({
            title: '提交成功',
            message: '提交成功',
            duration: 1000,
            type: 'success'
        })
    }
}

//删除
const handleDel = async(row)=>{
    ElMessageBox.confirm(
    '是否要删除该条数据？',
    '警告',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '删除失败',
      })
    })
    let {data} = await axios.delete('/data/del',{
        params:{
            id:row.id
        }
    })
    if(data.code == 200){
        getList()
    }

}
</script>

<style>

</style>
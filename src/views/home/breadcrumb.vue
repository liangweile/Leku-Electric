<template>
   <div class="bread">
        <el-card style="background-color:rgb(212, 202, 191)">
            <el-breadcrumb>
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item
                v-for="(item,index) in $route.matched"
                :key="index"
                >{{item.name}}</el-breadcrumb-item>
                <span style="color:rgb(40, 105, 105);font-size: larger;">乐酷电量智能监控系统</span>
                <el-button style="float: right;" type="primary" class="exit" @click="goBack">退出登录</el-button>
            </el-breadcrumb>
        </el-card>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
const goBack = () => {
    router.push('/login')
}
</script>

<style>
.bread{
    width: 100%;
    height: 100%;
}
.el-breadcrumb{
    font-size: 22px;
}
.el-button{
    height: 25px;
    font-size: 20px;
}
</style>
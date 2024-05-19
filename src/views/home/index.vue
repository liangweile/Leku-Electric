<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <NavMenu />
            </el-aside>
            <el-container>
                <el-header>
                    <BreadCrumb />
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import {reactive} from 'vue'
import NavMenu from './navMenu.vue'
import BreadCrumb from './breadcrumb.vue'

</script>
<style>
.common-layout{
    height: 100%;
    width: 100%;
}
.el-container{
    height: 100%;
    width: 100%;
}
.el-aside{
    height: 100%;
    text-align: left;
    background-color: rgb(17, 93, 140);
}
.el-header{
    display: flex;
    justify-content: space-between;
}
.el-main{
    text-align: left;
    padding: 0;
}
</style>
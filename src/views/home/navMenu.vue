<template>
 <div class="menu">
        <el-aside width="200px">
            <el-menu
                router
                :default-active="activePath"
                class="el-menu-vertical-demo"
                background-color="#2578b5"
                text-color="#fff"
                active-text-color="#ffd04b">
                <template v-for="(item,index) in menus">
                    <el-sub-menu :index="index + ''" :key="index"
                    v-if="!item.hidden"
                    >
                        <template #title>
                        <i><el-icon><component :is="item.icon"></component></el-icon></i>
                        <span>{{item.name}}</span>
                        </template>
                        <el-menu-item 
                        :index="child.path" 
                        v-for="(child,index) in item.children" 
                        :key="index">
                            <i><el-icon><component :is="child.icon"></component></el-icon></i>
                            {{child.name}}
                        </el-menu-item>
                    </el-sub-menu>
                </template>
            </el-menu>
        </el-aside>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const menus = router.options.routes
const activePath = router.currentRoute.value.path
</script>

<style>
.el-menu{
    border: none;
}
.el-sub-menu__title{
    font-size: 22px;
    height: 70px;
}
.el-menu-item{
    font-size: 20px;
}
</style>
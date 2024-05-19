import { createRouter, createWebHistory} from 'vue-router'
import {
    House,
    Monitor,
    Location,
    Van,
    DataLine,
    PictureFilled,
    Setting
} from '@element-plus/icons-vue'
const routes = [
    {
        path: '/',
        hidden: true,
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        hidden: true,
        component: () => import('../views/login/index.vue')
    },
    {
        path: '/home',
        name: '首页',
        icon: House,
        meta:{title:'首页'},
        redirect: '/home/index',
        component: () => import('../views/home/index.vue'),
        children: [
            {
                path: '/home/index',
                name: '车辆库存',
                icon: House,
                meta:{title:'车辆库存'},
                component: () => import('../views/home/index/index.vue')
            }
        ]
    },
    {
        path: '/monitor',
        name: '电量监控',
        icon: Monitor,
        meta:{title:'电量监控'},
        component: () => import('../views/home/index.vue'),
        children: [
            {
                path: '/monitor/info',
                name: '车辆详情',
                icon: Setting,
                meta:{title:'车辆详情'},
                component: () => import('../views/home/monitor/info/index.vue')
            },
            {
                path: '/monitor/list',
                name: '车辆列表',
                icon: PictureFilled,
                meta:{title:'车辆列表'},
                component: () => import('../views/home/monitor/list/index.vue')
            }
        ]
    },
    {
        path: '/vehicle',
        name: '车辆监控',
        icon:Van,
        meta:{title:'车辆监控'},
        component: () => import('../views/home/index.vue'),
        children: [
            {
                path: '/vehicle/index',
                name: '车辆情况',
                icon:Van,
                meta:{title:'车辆情况'},
                component: () => import('../views/home/vehicle/index.vue')
            }
        ]
    },
    {
        path: '/census',
        name: '统计分析',
        icon:DataLine,
        meta:{title:'统计分析'},
        component: () => import('../views/home/index.vue'),
        children: [
            {
                path: '/census/census',
                name: '车辆分析',
                icon:DataLine,
                meta:{title:'车辆分析'},
                component: () => import('../views/home/census/index.vue')
            }
        ]
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
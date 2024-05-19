<template>
    <div class="login">
        <div class="login-content">
            <div class="login-item login-box">
                <i><el-icon><Monitor /></el-icon></i>
                <p>电量监控</p>
            </div>
            <div class="login-item login-box">
                <i><el-icon><Location /></el-icon></i>
                <p>地图分布</p>
            </div>
            <!-- 登录表单 -->
            <div class="login-item login-form">
                <p class="login-title">乐酷电量智能监控系统</p>
                <el-form
                    ref="ruleFormRef"
                    :model="ruleForm"
                    :rules="rules"
                    label-width="auto"
                    class="demo-ruleForm"
                >
                    <el-form-item label="用户名" prop="user">
                        <el-input v-model="ruleForm.user" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" @click="submitForm(ruleFormRef)">
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="login-item login-box">
                <i><el-icon><Van /></el-icon></i>
                <p>车辆监控</p>
            </div>
            <div class="login-item login-box">
                <i><el-icon><DataLine /></el-icon></i>
                <p>统计分析</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref,reactive} from 'vue'
import axios from '../../api'
import {useRouter} from 'vue-router'
import { usernameRule, passwordRule } from '../../utils/validate.js'
import { Monitor, Location, Van, DataLine} from '@element-plus/icons-vue'
const ruleForm = reactive({
    user:'admin123',
    password:'Admin123*'
})
const router = useRouter()
const ruleFormRef = ref()
const rules = reactive({
    user: [
        { validator:usernameRule, trigger: 'blur' },
    ],
    password: [
        { validator:passwordRule,trigger: 'blur' },
    ]
})

function submitForm(formEl){
    formEl.validate(async valid => {
        if(valid){
            // alert('登录成功！')
            // let res = await axios.post('data/login',ruleForm)
            // let {code} = res.data
            // if(code == 200){
            router.push('/home')
            // }else{
            //     alert('用户名或密码不匹配')
            // }
        }else{
            alert('校验未通过')
        }
    })
}
</script>

<style>
.el-form-item{
    justify-content: center;
}
.el-form-item__label{
    color:#fff;
    font-size: large;
}
.el-form-item__content{
   flex:0.8
}
.el-button{
    margin-left: 30%;
}
</style>
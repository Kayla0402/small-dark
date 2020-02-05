<template>
    <div class="login-wrap"
         v-loading="loading"
         element-loading-text="拼命加载中"
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.8)"
         style="background:url('static/img/bg.png') no-repeat fixed top;background-size: cover;">
        <div class="ms-title">

            <!--<img src="../../../static/img/logo.jpg" style="width: 200px"/>-->
            <!--<img src="static/img/logo.png" style="width: 131px"/>-->
            <!--<div  style="background:url(../../../static/img/logo.png);background-size:100% 100%;width: 100px;height: 100px">-->

            <!--</div>-->
        </div>
        <div class="ms-login">
            <el-row>
                <el-col :span="10">
                    <div class="login-wrap"  style="width: 100%;">
                        <div style="text-align: center;vertical-align: middle;margin-top: 30px">
                            <img src="../../../static/img/left.png" style="width: 89%;height: 80%;"/>
                        </div>
                    </div>
                </el-col>
                <el-col :span="14">

                    <div class="login-wrap"  style="width: 100%;height: 350px;">

                        <div style="width: 100%;height: 100%;background-color:#fff;border-radius: 10px">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm" style="padding: 80px;">
                                <div>
                                    <h2 style="text-align: center">金小二管理系统登录</h2>
                                </div>
                                <el-form-item prop="username" style="margin-top: 30px">
                                    <el-input v-model="ruleForm.username" placeholder="username"  suffix-icon="el-icon-user" size="medium"></el-input>
                                </el-form-item>
                                <el-form-item prop="password">
                                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"  suffix-icon="el-icon-unlock" size="medium"></el-input>
                                </el-form-item>
                                <!--<el-radio v-model="radio" label="1">客服登录</el-radio>-->
                                <!--<el-radio v-model="radio" label="2">主管业务员登录</el-radio>-->
                                <div class="login-btn">

                                </div>
                                <el-row>
                                    <el-col :span="10">
                                        <div style="margin-top: 10px">
                                            <el-checkbox v-model="checked">记住密码</el-checkbox>
                                        </div>
                                    </el-col>

                                    <el-col :span="14">
                                        <div @click="submitForm('ruleForm')" style="text-align: right">
<!--                                            <img src="../../../static/img/login.png" style="width: 100%"/>-->

                                            <el-button type="primary" style="width: 100%;height: 40px">立即登录</el-button>
                                        </div>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </div>
                    </div>

                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {Decrypt,Encrypt} from 'src/components/common/cryptojs'

    export default {
        data: function(){
            return {
                radio: "1",
                ruleForm: {
                    username: 'adminv',
                    password: '123123'
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                },
                loading: false,
                checked:'',
                userType: '0'
            }
        },
        created() {

        },
        methods: {
            submitForm(formName) {

                let _this=this;
//                this.loading=true;
                const self = this;
                this.$nextTick(() => {
                    self.$router.replace({path: '/dashboard'});
                })

//                this.$post('/getSystemToken')
//                    .then((data) => {
//                        _this.loading=false;
//                        var response = JSON.parse(data.data);
//                        localStorage.setItem("accessToken",response.data.access_token);
//                        console.log(response);
//                        self.$router.replace({path: '/instrument'});
//                    })

            },

        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:35%;
        width:100%;
        margin-top: -230px;
        margin-left: -20px;
        text-align: center;

    }
    .ms-login{
        position: absolute;
        background-color: white;
        border-radius: 10px;
        left:50%;
        top:50%;
        width:800px;
        height:400px;
        margin:-200px 0 0 -400px;
        /*padding:40px;*/
        /*background: #fff;*/
        /*opacity:0.5;*/
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
<style>
    .el-input--medium .el-input__inner{
        height: 45px;
    }
    .el-input--medium{
        font-size: 16px;
    }
</style>

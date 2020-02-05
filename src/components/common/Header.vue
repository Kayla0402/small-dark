<template>
    <div>

        <div style="width: 100%;height: 60px;background-color: white">
            <el-row>
                <el-col :span="20"><h3 style="color: #37a6ee;font-weight: bold;line-height: 60px;margin-left: 20px ">融保宝金融数据管理</h3></el-col>
                <el-col :span="4">
                    <!--<el-button type="primary" icon="el-icon-setting" style="margin-top: 15px;float: right;margin-right: 20px"><i class="el-icon-setting el-icon&#45;&#45;left"></i>设置</el-button>-->
                    <el-dropdown style="line-height: 60px;float: right;margin-right: 40px"  @click="handleClick">
                          <span class="el-dropdown-link">
                            <i class="el-icon-setting el-icon--left"></i>
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">修改密码</el-dropdown-item>
                            <el-dropdown-item command="b">注销</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
        </div>

        <el-dialog title="修改密码" :visible.sync="dialogFormLeanderVisible" label-width="100px">
            <el-form>

                <el-form-item label="密码" >
                    <el-input v-model="password1"></el-input>
                </el-form-item>


                <el-form-item label="确认密码">
                    <el-input v-model="password2"></el-input>
                </el-form-item>


            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="submitPassword()" type="warning" round>确定</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script>
    //    import bus from '../common/bus';
    export default {
        data() {
            return {
                password1:"",
                password2:"",
                dialogFormLeanderVisible:false
            }
        },
        computed:{

        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username');
                    this.$router.push('/login');
                }

                if(command == 'resetpassword'){
                    this.dialogFormLeanderVisible=true
                }
            },

            handleClick(command){
                if(command=="a"){
                    this.loginOut();
                }
                if(command=="b"){
                    this.resetPassword();
                }

            },

            loginOut(){

                console.log("用户注销");
                localStorage.removeItem('ms_username');
                this.$router.push('/');
                // next({ path: '/', replace: true })
            },
            resetPassword(){
                this.dialogFormLeanderVisible=true;
            },
            submitPassword(){
                let _this=this;
                if(this.password1!=this.password2){
                    alert("密码输入错误");
                    return;
                }
                var query = new AV.Query('cus_service_user');
                query.equalTo('phoneNum', localStorage.getItem("phoneNum"));
                query.find().then(function (results) {

                    console.log(results[0]);
                    results[0].set('password',_this.password1);
                    results[0].save().then(function (todo) {
                        alert("密码修改成功");
                        _this.$router.replace('/login');
                    })

                }, function (error) {
                    console.log(error);
                });
            }

        },
        mounted(){
            if(document.body.clientWidth < 1500){
                this.collapseChage();
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:150px;
        margin-left: 20px;
        margin-top: 10px;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-baseInfo {
        float: right;
        padding-right: 50px;
        font-size: 14px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>

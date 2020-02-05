<template>
    <!--<div class="sidebar" >-->
        <!--<el-menu class="sidebar-el-menu" :default-active="onRoutes"   :collapse="collapse" background-color="black" text-color="#fff" active-text-color="#37a6ee" unique-opened router>-->
            <!--<template v-for="item in items">-->
                <!--<template v-if="item.subs">-->
                    <!--<el-submenu :index="item.index" :key="item.index" v-show="item.showitem" style="margin-top: 20px;margin-left: 10px;margin-right: 10px;">-->
                        <!--<template slot="title">-->
                            <!--<i :class="item.icon" style="font-size: 20px;color: #a7b1cc;vertical-align:middle;"></i><span style="margin-left: 5px;font-weight: bold;line-height: 25px;vertical-align:middle;" slot="title">{{ item.title }}</span>-->
                        <!--</template>-->
                        <!--<template v-for="subItem in item.subs">-->
                            <!--<el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index" v-show="subItem.showitem">-->
                                <!--<template slot="title">{{ subItem.title }}</template>-->
                            <!--</el-submenu>-->
                            <!--<el-menu-item v-else :index="subItem.index" :key="subItem.index" v-show="subItem.showitem" style="margin-top: 0px">-->
                                <!--<li style="list-style-type: disc;font-size: 14px;margin-left: 20px;"><a style="font-size:14px;">{{ subItem.title }}</a></li>-->
                            <!--</el-menu-item>-->
                            <!--<div style="height: 10px"></div>-->
                        <!--</template>-->
                    <!--</el-submenu>-->
                <!--</template>-->
                <!--<template v-else >-->

                    <!--<el-menu-item :index="item.index" :key="item.index" v-show="item.showitem" style="margin-top: 20px;margin-left: 10px;margin-right: 10px;">-->
                        <!--<i :class="item.icon" style="font-size: 20px"> </i><span slot="title">{{ item.title }}</span>-->
                    <!--</el-menu-item>-->

                <!--</template>-->
            <!--</template>-->
        <!--</el-menu>-->
    <!--</div>-->

    <div class="sidebar">
        <el-menu class="sidebar-el-menu"
                 :default-active="onRoutes"
                 :collapse="isOpen.state"
                 background-color="#304156"
                 text-color="#bfcbd9"
                 active-text-color="#409EFF"
                 router=""
                 >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index" v-show="item.showitem" >
                        <template slot="title">
                            <i :class="item.icon" style="font-size: 20px;color: #f5f5f5;vertical-align:middle;"></i><span style="margin-left: 5px;font-weight: bold;line-height: 25px;vertical-align:middle;" slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index" v-show="subItem.showitem">
                                <template slot="title">{{ subItem.title }}</template>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index" v-show="subItem.showitem">
                                <li style="list-style-type: disc;font-size: 14px;margin-left: 20px;"><a style="font-size:14px;">{{ subItem.title }}</a ></li>
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index" v-show="item.showitem">
                        <!--<i :class="item.icon" style="font-size: 25px"> </i><span slot="title">{{ item.title }}</span>-->
                        <i :class="item.icon" style="font-size: 20px;color: #f5f5f5;vertical-align:middle;"></i><span style="margin-left: 5px;font-weight: bold;line-height: 25px;vertical-align:middle;" slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>

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
    import bus from '../common/bus';


    export default {
        inject: ['reload'],

        data() {
            return {
                isOpen:{'state': document.documentElement.clientWidth >= 1200 ?false:true},
                dialogFormLeanderVisible:false,
                position:this.$cookies.get("position"),
                showName:this.$cookies.get("showName"),
                password1:"",
                password2:"",
                items: [

                    {
                        showitem:1,
                        icon: 'el-icon-aim',
                        index: 'dashboard',
                        title: '仪表盘',
                        role:true,
                    },

                    {
                        showitem:1,
                        icon: 'el-icon-s-management',
                        index: '1',
                        title: '产品管理',
                        role:false,
                        subs: [
                            {
                                index: 'home',
                                title: '产品列表',
                                showitem:1

                            },
                            {
                                index: 'productList',
                                title: '产品数据',
                                showitem:1
                            }

                        ]
                    },

                    {
                        showitem:1,
                        icon: 'el-icon-s-grid',
                        index: '2',
                        title: '内容管理',
                        role:false,
                        subs: [

                            {
                                index: 'FacilitatorData',
                                title: '服务商管理',
                                showitem:localStorage.getItem("userType")==='0'
                            },
                            {
                                index: 'JinjianData',
                                title: '进件数据',
                                showitem:1
                            }

                        ]
                    },


                    {
                        showitem:localStorage.getItem("userType")==='0',
                        icon: 'el-icon-user',
                        index: '3',
                        title: '用户管理',
                        role:false,
                        subs: [
                            {
                                index: 'memberList',
                                title: '会员列表',
                                showitem:1
                            },
                            {
                                index: 'UserListData',
                                title: '用户列表',
                                showitem:1
                            }
                        ]
                    },


                    {
                        showitem:localStorage.getItem("userType")==='0',
                        icon: 'el-icon-setting',
                        index: '4',
                        title: '系统管理',
                        subs: [
                            {
                                index: 'ManagerList',
                                title: '管理员列表',
                                showitem:1
                            },
                            {
                                index: 'address',
                                title: '地区管理',
                                showitem:1
                            },
                            {
                                index: 'Facilitator',
                                title: '服务商列表',
                                showitem:1
                            },
                            {
                                index: 'Role',
                                title: '角色管理',
                                showitem:1
                            },
                            {
                                index: 'Car',
                                title: '车牌管理',
                                showitem:1
                            },
                            {
                                index: 'Review',
                                title: '审核设置',
                                showitem:1
                            },
                            {
                                index: 'BaseData',
                                title: '基础数据管理',
                                showitem:1
                            },
                        ]
                    },

                    {
                        showitem:1,
                        icon: 'el-icon-coin',
                        index: '5',
                        title: '财务管理',
                        role:false,
                        subs: [
                            {
                                index: 'Withdraw',
                                title: '会员提现管理',
                                showitem:localStorage.getItem("userType")==='0'
                            },
                            {
                                index: 'CaiwuData',
                                title: '财务数据',
                                showitem:1
                            },
                            {
                                index: 'Commission',
                                title: '佣金数据',
                                showitem:localStorage.getItem("userType")==='0'
                            }
                        ]
                    },


                ]
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                console.log(msg)
                this.collapse = msg;
            })
            this.getRoleInfo();
        },

        methods:{
            getRoleInfo() {
                const _this = this
                this.$fetch('login-user-role')
                    .then((data) => {
                        console.log(data)
                        if (data.data.roleName === 'ROLE_ADMIN'){
                            localStorage.setItem("userType",'0');

                        } else if (data.data.roleName === 'ROLE_SERVICE'){
                            localStorage.setItem("userType",'1');
                        }
//                        this.reload();
                        _this.updateData();

                    })
            },

            updateData(){
                this.items = [

                    {
                        showitem:1,
                        icon: 'el-icon-aim',
                        index: 'dashboard',
                        title: '仪表盘',
                        role:true,
                    },

                    {
                        showitem:1,
                        icon: 'el-icon-s-management',
                        index: '1',
                        title: '产品管理',
                        role:false,
                        subs: [
                            {
                                index: 'home',
                                title: '产品列表',
                                showitem:1

                            },
                            {
                                index: 'productList',
                                title: '产品数据',
                                showitem:1
                            }

                        ]
                    },

                    {
                        showitem:1,
                        icon: 'el-icon-s-grid',
                        index: '2',
                        title: '内容管理',
                        role:false,
                        subs: [

                            {
                                index: 'FacilitatorData',
                                title: '服务商管理',
                                showitem:localStorage.getItem("userType")==='0'
                            },
                            {
                                index: 'JinjianData',
                                title: '进件数据',
                                showitem:1
                            }

                        ]
                    },


                    {
                        showitem:localStorage.getItem("userType")==='0',
                        icon: 'el-icon-user',
                        index: '3',
                        title: '用户管理',
                        role:false,
                        subs: [
                            {
                                index: 'memberList',
                                title: '会员列表',
                                showitem:1
                            },
                            {
                                index: 'UserListData',
                                title: '用户列表',
                                showitem:1
                            }
                        ]
                    },


                    {
                        showitem:localStorage.getItem("userType")==='0',
                        icon: 'el-icon-setting',
                        index: '4',
                        title: '系统管理',
                        subs: [
                            {
                                index: 'ManagerList',
                                title: '管理员列表',
                                showitem:1
                            },
                            {
                                index: 'address',
                                title: '地区管理',
                                showitem:1
                            },
                            {
                                index: 'Facilitator',
                                title: '服务商列表',
                                showitem:1
                            },
                            {
                                index: 'Role',
                                title: '角色管理',
                                showitem:1
                            },
                            {
                                index: 'Car',
                                title: '车牌管理',
                                showitem:1
                            },
                            {
                                index: 'Review',
                                title: '审核设置',
                                showitem:1
                            },
                            {
                                index: 'BaseData',
                                title: '基础数据管理',
                                showitem:1
                            },
                        ]
                    },

                    {
                        showitem:1,
                        icon: 'el-icon-coin',
                        index: '5',
                        title: '财务管理',
                        role:false,
                        subs: [
                            {
                                index: 'Withdraw',
                                title: '会员提现管理',
                                showitem:localStorage.getItem("userType")==='0'
                            },
                            {
                                index: 'CaiwuData',
                                title: '财务数据',
                                showitem:1
                            },
                            {
                                index: 'Commission',
                                title: '佣金数据',
                                showitem:localStorage.getItem("userType")==='0'
                            }
                        ]
                    },

                ];
            },
            handleClick(command){

//                console.log(command);
                if(command=="b"){
                    this.loginOut();
                }
                if(command=="a"){
                    this.resetPassword();
                }

            },
            loginOut(){
                this.$cookies.remove("showName");
                this.$cookies.remove("position");
                this.$router.replace('/');
            },
            resetPassword(){
                this.dialogFormLeanderVisible=true;
            },
            submitPassword(){
                let _this=this;
                if(this.password1!=this.password2){
                    alert("两次输入的密码不一致");
                    return;
                }
                this.$post('/resetPassword?userName='+localStorage.getItem("username")+"&oldPassword="+this.password1+"&password="+this.password2)
                    .then((data) => {
                        alert("密码修改成功");
                        _this.$router.push('/login');
                    },err => {
                        this.$notify({
                            title: "更新失败",
                            message: data.message,
                            type: 'success'
                        });
                    })
            },

            update(open){
                // this.collapse = isOpen;
                this.$set(this.isOpen,'state',!open);
            },

//            reflashPage(){
//                let NewPage = '_empty' + '?time=' + new Date().getTime()/500;
//                this.$router.push(NewPage);
//                this.$router.go(-1);
//            }

        },

        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            },
            userposition(){
                let userposition = localStorage.getItem('cookie');
                return userposition ? userposition : this.position;
            },
            username(){
                let username = localStorage.getItem('name');
                return username ? username : this.name;
            },
            usercompany(){
                let usercompany = localStorage.getItem('cus_b_com_name');
                return usercompany ? usercompany : this.company;
            },


        },


    }
</script>

<style>
    /*.sidebar{*/
        /*display: block;*/
        /*position: absolute;*/
        /*left: 0;*/
        /*top: 0px;*/
        /*bottom:0;*/
        /*overflow-y: scroll;*/
    /*}*/
    /*.sidebar::-webkit-scrollbar{*/
        /*width: 0;*/
    /*}*/
    /*.sidebar-el-menu:not(.el-menu--collapse){*/
        /*width: 250px;*/
    /*}*/
    /*.sidebar > ul {*/
        /*height:100%;*/
    /*}*/

    /*.el-submenu__icon-arrow{*/
        /*color: #675a9f;*/
    /*}*/

    /*.el-dropdown-link {*/
        /*cursor: pointer;*/
        /*color: #409EFF;*/
    /*}*/

    /*.el-menu-item.is-active {*/
        /*background-color: rgb(255, 255, 255) !important;*/
        /*box-shadow: 5px 5px 10px 4px rgba(62, 68, 232, 0.2);*/
        /*border-radius: 10px;*/
        /*margin-left: 20px;margin-right: 20px;*/
    /*}*/
    /*.is-opened{*/
        /*background-color: rgb(255, 255, 255) !important;*/
        /*box-shadow: 5px 5px 10px 4px rgba(62, 68, 232, 0.2);*/
        /*border-radius: 10px;*/
    /*}*/

    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 0px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>

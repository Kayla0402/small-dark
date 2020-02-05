<template>
    <div class="wrapper" style="background-color: #536588">
        <!--<v-sidebar ref="silder"></v-sidebar>-->
        <vSidebar ref="silder"></vSidebar>
        <div class="content-box" :class="{'content-collapse':collapse}" v-if="isOpen">
            <div style="height: 60px;background-color: white;">

                <div style="float: left">
                    <div style="height: 60px;background-color: white;display: flex">
                        <i :class="foldStr" style="margin-top: 17px;margin-left: 15px" @click="clickFold" ></i>
                        <breadcrumb id="breadcrumb-container" class="breadcrumb-container" style="margin-left: 15px"  />
                    </div>
                </div>
                <!--<hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />-->

                <div style="float: right;display: flex">
                    <div style="margin-top: 15px;margin-right: 10px">{{userRole}}</div>
                    <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click" style="float: right;margin-top: 10px;margin-right: 30px">
                        <div class="avatar-wrapper">
                            <img src="static/img/avate.png" class="user-avatar" style="width: 34px;height: 34px">
                            <i class="el-icon-caret-bottom" />
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <span style="display:block;">个人中心</span>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <span style="display:block;" @click="changePwd">更新密码</span>
                            </el-dropdown-item>
                            <el-dropdown-item divided>
                                <span style="display:block;" @click="logout">退出登录</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>

            </div>
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>

        <div class="content-box1" :class="{'content-collapse':collapse}" v-if="!isOpen">
            <div style="height: 60px;background-color: white;">

                <div style="float: left">
                    <div style="height: 60px;background-color: white;display: flex">
                        <i :class="foldStr" style="margin-top: 17px;margin-left: 15px" @click="clickFold" ></i>
                        <breadcrumb id="breadcrumb-container" class="breadcrumb-container" style="margin-left: 15px"  />
                    </div>
                </div>
                <!--<hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />-->
                <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click" style="float: right;margin-top: 10px;margin-right: 30px">
                    <div class="avatar-wrapper">
                        <img src="static/img/avate.png" class="user-avatar" style="width: 34px;height: 34px">
                        <i class="el-icon-caret-bottom" />
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <router-link to="/profile/index">
                            <el-dropdown-item>个人中心</el-dropdown-item>
                        </router-link>
                        <el-dropdown-item>
                            <span style="display:block;" @click="changePwd">更新密码</span>
                        </el-dropdown-item>
                        <el-dropdown-item divided>
                            <span style="display:block;" @click="logout">退出登录</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>

        <el-dialog
                title="密码重置"
                :visible.sync="dialogVisible"
                width="30%">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="新密码">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="重置密码">
                    <el-input v-model="form.passwordSure"></el-input>
                </el-form-item>
            </el-form>
            <el-button @click="dialogVisible = false" >取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
        </el-dialog>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vTags from './Tags.vue';
    import bus from './bus';
    import Breadcrumb from '../Breadcrumb'
    import Hamburger from '../Hamburger'

    export default {
        inject: ['reload'],
        data(){
            return {
                tagsList: [],
                collapse: false,
                dialogVisible: false,
                isOpen:document.documentElement.clientWidth >= 1200 ?true:false,
                foldStr:'el-icon-s-unfold',
                userRole:localStorage.getItem('userRole'),

                form:{
                    password: '',
                    passwordSure: ''
                },
            }
        },
        mounted() {
            // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
            const that = this;
            window.onresize = function temp() {
                var width = document.documentElement.clientWidth;
                if (width <= 1200) {
                    that.isOpen = false;
                    that.foldStr = 'el-icon-s-fold';
                } else {
                    that.isOpen = true;
                    that.foldStr = 'el-icon-s-unfold';
                }
                that.$refs.silder.update(that.isOpen);
                // console.log('clientWidth is ' + document.documentElement.clientWidth);
            };
        },
        components:{
            vHead, vSidebar, vTags,Breadcrumb,Hamburger
        },
        created(){
            this.getRoleInfo();

            // bus.$on('collapse', msg => {
            //     this.collapse = msg;
            // })
            // // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
            // bus.$on('tags', msg => {
            //     console.log(msg)
            //     let arr = [];
            //
            //     console.log(msg);
            //     for(let i = 0, len = msg.length; i < len; i ++){
            //         msg[i].name && arr.push(msg[i].name);
            //     }
            //     this.tagsList = arr;
            // })

        },

        methods: {
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
                        localStorage.setItem("userRole",data.data.description);
                        _this.userRole = data.data.description;

                    })
            },
            toggleSideBar() {
                this.$store.dispatch('app/toggleSideBar')
            },
            clickFold(){
                this.isOpen = !this.isOpen;
                if (this.isOpen) {
                    this.foldStr = 'el-icon-s-unfold';
                } else {
                    this.foldStr = 'el-icon-s-fold';
                }

                this.$refs.silder.update(this.isOpen);
            },
            onUser(){

            },
            onSearch(){

            },

            changePwd(){
                this.dialogVisible = true;
            },
            submit() {
                this.dialogVisible = false
            },
            logout(){
//                this.$router.push('/login');

                this.$fetch('logout')
                    .then((data) => {
                        console.log(data)
                        window.location.href = 'http://newadmin.jinxiaoersh.com/newAdmin/login?logout';
                    })

            }
        }
    }
</script>

<style>
    .content-box {
        position: absolute;
        left: 250px;
        right: 0;
        top: 0px;
        bottom: 0;
        padding-bottom: 30px;
        -webkit-transition: left .3s ease-in-out;
        transition: left .3s ease-in-out;
        background: #f0f0f0;
    }
    .content-box1 {
        position: absolute;
        left: 60px;
        right: 0;
        top: 0px;
        bottom: 0;
        padding-bottom: 30px;
        -webkit-transition: left .3s ease-in-out;
        transition: left .3s ease-in-out;
        background: #f0f0f0;
    }
</style>

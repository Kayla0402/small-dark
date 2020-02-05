import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/dashboard/admin/index.vue'], resolve),
                    meta: { title: '仪表盘' }
                },

                {
                    path: '/home',
                    component: resolve => require(['../components/page/home/Home.vue'], resolve),
                    meta: { title: '首页' }
                },
                {
                    path: '/productList',
                    component: resolve => require(['../components/page/home/productList.vue'], resolve),
                    meta: { title: '产品数据' }
                },

                {
                    path: '/FacilitatorData',
                    component: resolve => require(['../components/page/content/FacilitatorData.vue'], resolve),
                    meta: { title: '服务商管理' }
                },
                {
                    path: '/JinjianData',
                    component: resolve => require(['../components/page/content/JinjianData.vue'], resolve),
                    meta: { title: '进件数据' }
                },

                {
                    path: '/memberList',
                    component: resolve => require(['../components/page/user/memberList.vue'], resolve),
                    meta: { title: '会员列表' }
                },
                {
                    path: '/UserListData',
                    component: resolve => require(['../components/page/user/UserListData.vue'], resolve),
                    meta: { title: '用户列表' }
                },

                {
                    path: '/ManagerList',
                    component: resolve => require(['../components/page/system/ManagerList.vue'], resolve),
                    meta: { title: '管理员列表' }
                },
                {
                    path: '/address',
                    component: resolve => require(['../components/page/system/address.vue'], resolve),
                    meta: { title: '地区管理' }
                },
                {
                    path: '/Facilitator',
                    component: resolve => require(['../components/page/system/Facilitator.vue'], resolve),
                    meta: { title: '服务商列表' }
                },
                {
                    path: '/Role',
                    component: resolve => require(['../components/page/system/Role.vue'], resolve),
                    meta: { title: '角色管理' }
                },
                {
                    path: '/Car',
                    component: resolve => require(['../components/page/system/Car.vue'], resolve),
                    meta: { title: '车牌管理' }
                },
                {
                    path: '/Review',
                    component: resolve => require(['../components/page/system/Review.vue'], resolve),
                    meta: { title: '审核设置' }
                },
                {
                    path: '/BaseData',
                    component: resolve => require(['../components/page/system/BaseData.vue'], resolve),
                    meta: { title: '基础数据管理' }
                },


                {
                    path: '/Withdraw',
                    component: resolve => require(['../components/page/money/Withdraw.vue'], resolve),
                    meta: { title: '会员提现管理' }
                },
                {
                    path: '/CaiwuData',
                    component: resolve => require(['../components/page/money/CaiwuData.vue'], resolve),
                    meta: { title: '财务数据' }
                },
                {
                    path: '/Commission',
                    component: resolve => require(['../components/page/money/Commission.vue'], resolve),
                    meta: { title: '佣金数据' }
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})

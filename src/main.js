import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import "babel-polyfill";
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.min.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.min.js'

import VueAMap from 'vue-amap';
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import './assets/iconfont/iconfont.css'

import './styles/element-variables.scss'
// import '@/styles/index.scss'
// import '@/styles/app.scss';

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)


Vue.use(preview);
Vue.use(ElementUI, {
    size: 'small'
});
Vue.use(VueAMap);
Vue.config.productionTip = false
VueAMap.initAMapApiLoader({
      key: 'acca8b7ad0f8e17ca7fa296483f8c261',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
});

Vue.use(ElementUI);
import {post,fetch,patch,put} from './components/page/https/htttp'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;


import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);



// router.beforeEach((to, from, next) => {
//     // const role =VueCookies.get("showName")
//     // if (to.path !== '/Login'&&!role) {
//     //     next('/Login');
//     // } else if (to.meta.permission) {
//     //
//     // } else {
//     //     // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
//     //     if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
//     //         Vue.prototype.$alert('不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
//     //             confirmButtonText: '确定'
//     //         });
//     //     } else {
//     //         next();
//     //     }
//     // }
// })


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

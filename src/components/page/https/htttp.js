import axios from 'axios';
import qs from 'qs'

import { Message } from 'element-ui';

axios.defaults.timeout = 50000;
axios.defaults.baseURL ='http://admin91.jinxiaoertg.com/';
// axios.defaults.baseURL ='http://newadmin.jinxiaoersh.com/';

//http request 拦截器
axios.interceptors.request.use(
    config => {
        // const token = localStorage.getItem("token");
        // const showName = localStorage.getItem("showName");
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type':'application/json',
            // 'token': token,
        }
        // if(token){
        //   config.params = {'token':token}
        // }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);


// //http response 拦截器
// axios.interceptors.response.use(
//     response => {
//         if(response.data.errCode ==2){
//             router.push({
//                 path:"/login",
//                 querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
//             })
//         }
//         return response;
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data){
    console.log(url);
    return new Promise((resolve,reject) => {
        axios.post(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}


/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.patch(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.put(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}



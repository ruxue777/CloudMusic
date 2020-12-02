import axios from 'axios';
import { useRouter } from 'vue-router'
import { Dialog } from 'vant';

//环境控制
if(process.env.NODE_ENV === 'development'){
    //开发环境
    axios.defaults.baseURL = ''
}else if(process.env.NODE_ENV === 'test'){
    //测试环境
    axios.defaults.baseURL = ''
}else if(process.env.NODE_ENV === 'production'){
    //生产环境
    axios.defaults.baseURL = ''
}   

//请求拦截
axios.interceptors.response.use((config) => {
    if (localStorage.getItem('Authorization')) {
	      config.headers.Authorization = localStorage.getItem('Authorization');
	    }
	return config;
},error => {
    return Promise.reject(error);
})

//响应拦截器
axios.interceptors.response.use((response) => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
},error => {
    if(error.response.status){
        switch(error.response.status){
            case 401:
                useRouter().replace({
                    path: '/login'
                })
            break;
            case 403:
                Dialog.alert({
                    message:'登录过期，请重新登录'
                })
                localStorage.removeItem('Authorization')
                setTimeout(() => {
                    useRouter().replace({
                    path: '/login'
                })
                }, 1500);
            break;
            case 404:
                Dialog.alert({
                    message:'网络请求不存在'
                })
            break;  
            default: 
            Dialog.alert({
                message: error.response.data.message
            }) 
            return Promise.reject(error.response) 
        }
    }
})

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get (url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post (url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
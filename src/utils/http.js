import axios from 'axios'
import store from '../store'
// import qs from 'qs'
import Cookies from 'js-cookie'
// import router from '@/router'

// axios.defaults.timeout = 10000
axios.defaults.baseURL = process.env.VUE_APP_API_ROOT
axios.defaults.headers.post['Content-Type'] = 'application/json charset=UTF-8'

// request拦截器
axios.interceptors.request.use(
  config => {
    if (store.getters.getToken) {
      config.headers['token'] = store.getters.getToken
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// respone拦截器  //拦截响应response，并做一些错误处理
axios.interceptors.response.use(
  response => {
    //console.log('response' + JSON.stringify(response))
    // 通用逻辑，请求出错，全屏弹层提示
    if (response&&response.data.errcode === 401) {
      // token已过期或不存在
        console.log('未登陆，返回到login页面')
        // router.push({ path: '/login' })
        // if(window.parent===window){
        //     this.$router.go('/login');
        // }else{
        //     // top.location.href = '#/user/login';
        // }
        
    }
    return response;
  },
  error => {
    // if(error.message.indexOf('timeout') != -1){
    //   error.message = '本次操作请求超时，请重新操作'
    // }
    // MessageBox.alert( error.message, '', {
    //   confirmButtonText: '确定',
    // })
    //Message({ showClose: true, message: error.message + 'ww', type: 'error', duration: 0 })
    return Promise.reject(error)
  }
)



export default {
  // get(url, params = {}) {
  //   params['t_'+new Date().getTime()]=Math.random()
  //   return axios.get(url, {
  //     params: params
  //   })
  // },
  post(url, params = {}) {
    console.log('url',url)
    var headersData = {
      'App-Channel': Cookies.get('Channel')?Cookies.get('Channel'):'100001',
      'Accept': 'application/json, text/plain, */*',
      'App-Version': '1.0.0',
    };
    if (!/\/(login|reg)$/.test(url)) {
      headersData['Authorization'] =Cookies.get('Token') || '';
    }
    return axios.post(url, params.data||params, {
      headers: headersData
    })
  },
  put(url, data = {}) {
    return axios.put(url, data)
  },
  delete(url, data = {}) {
    return axios.delete(url, data)
  }
}

import axios from 'axios'
import store from '../store'
import { MessageBox } from 'element-ui'
import qs from 'qs'

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
    const data = response.data
    if (data && data.code === 0) {
      return response.data.content
    }else if (response.data instanceof Blob) {
      return response.data
    } else {
      //处理错误
      if (data.code === 40002) {//此接口没有授权 由于您长时间未操作本次登陆失效，请点击重新登录
        MessageBox({
          title: '',
          showClose: true,
          message: data.message ? data.message : '此接口没有授权 由于您长时间未操作本次登陆失效，请点击重新登录',
          type: 'error',
          confirmButtonText: '\xa0\xa0\xa0\xa0确\xa0\xa0\xa0定\xa0\xa0\xa0\xa0',
          callback: function () {
          }
        })
        // Message({ showClose: true,
        //   message: , type: 'warning' })
      } else if (data.code === 5001) {//此次请求ajax超时  本次操作请求超时，请重新操作
        MessageBox({ showClose: true, message: '本次操作请求超时，请重新操作', type: 'error', confirmButtonText: '\xa0\xa0\xa0\xa0确\xa0\xa0\xa0定\xa0\xa0\xa0\xa0', callback: function () {} })
      } else {
        MessageBox.alert( '请求系统出现异常，请重新打开', '', {
          confirmButtonText: '确定',
        })
      }

    }
  },
  error => {
    if(error.message.indexOf('timeout') != -1){
      error.message = '本次操作请求超时，请重新操作'
    }
    MessageBox.alert( error.message, '', {
      confirmButtonText: '确定',
    })
    //Message({ showClose: true, message: error.message + 'ww', type: 'error', duration: 0 })
    return Promise.reject(error)
  }
)

export default {
  get(url, params = {}) {
    params['t_'+new Date().getTime()]=Math.random()
    return axios.get(url, {
      params: params
    })
  },
  post(url, params = {}) {
    if (params.contentType && params.contentType == 'form') {
      return axios.post(url, qs.stringify(params.data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    } else {
      return axios.post(url, params.data || params)
    }
  },
  put(url, data = {}) {
    return axios.put(url, data)
  },
  delete(url, data = {}) {
    return axios.delete(url, data)
  }
}

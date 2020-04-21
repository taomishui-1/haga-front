import http from '../utils/http'


let URL = process.env.VUE_APP_BASE_UCAPIURI
// if ('true' !== process.env.VUE_APP_USE_MOCK) {
//   URL = process.env.VUE_APP_BASE_UCAPIURI
// }

export default {
  login(params) {
    return http.post(URL+'/passport/login', params)
  },
//   getLoginCaptcha(token) {
//     return http.post(URL + 'passport/login/sms/send', {
//       token: token
//     })
//   },
  getLoginCaptcha(params) {
    return http.post(URL + 'passport/login/sms/send',params)
  },
  accountReg(params) {
    return http.post(URL + 'passport/reg',params)
  },
  getRegCaptcha(params) {
    return http.post(URL + 'passport/reg/sms/send',params)
  },
  
}

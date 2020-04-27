import http from '../utils/http'


let URL = process.env.VUE_APP_VAS_UCAPIURI
// if ('true' !== process.env.VUE_APP_USE_MOCK) {
//   URL = process.env.VUE_APP_BASE_UCAPIURI
// }

console.log("dev",process.env)
// console.log('dev^',process.env.VUE_APP_BASEACTIVITYURI,process.env.VUE_APP_VAS_UCAPIURI)
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
  queryCurrent(){
    return http.post(URL + '/account/info?t='+Date.now())
  }

  /**
   * 
   * export async function queryCurrent(data?: any) {
      return request(`${UCAPIURI}/account/info?t=${Date.now()}`, {
        method: 'POST',
        data,
      });
    }
   * 
   * 
   */
  
}

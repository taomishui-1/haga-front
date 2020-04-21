import http from '../utils/http'

let URL = process.env.VUE_APP_VAS_SHOPURI

export default {
  list(params) {
    return http.post(URL+'/payment/mall/welfare',params)
  },
  list2(params) {
    return http.post(URL+'/payment/mall/welfare',params)
  },
  
}

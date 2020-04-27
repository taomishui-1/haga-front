import http from '../utils/http'

let URL = process.env.VUE_APP_VAS_SHOPURI

export default {
  queryJDList(params) {
    return http.post(URL+'/payment/shop/goods/jd',params)
  },
  toChange() {
    return http.post(URL+'/shop/exchange?t='+Date.now())
  },
  
}

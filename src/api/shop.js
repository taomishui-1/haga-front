import http from '../utils/http'

let URL = process.env.VUE_APP_VAS_SHOPURI

export default {
  queryFeedList(params) {
    return http.post(URL+'/shop/mall/feed?t='+Date.now(),params)
  },
  queryDetail(params) {
    return http.post(URL+'/shop/goods/detail?t='+Date.now(),params)
  },
  toExchange(params) {
    return http.post(URL+'/shop/exchange?t='+Date.now(),params)
  },
  
}

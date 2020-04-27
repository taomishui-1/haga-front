import http from '../utils/http'

let URL = process.env.VUE_APP_VAS_PLATAPIURI

export default {
  fetchHistory(params) {
    return http.post(URL+'/rank/profit/history',params)
  },
  fetchCurrent(params) {
    return http.post(URL+'/rank/profit/feed',params)
  },
  fetchRules(params) {
    return http.post(URL+'/rank/profit/rule',params)
  },
  doReset() {
    return http.post(URL+'rank/profit/reset')
  },
}
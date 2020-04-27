import http from '../utils/http'

let URL = process.env.VUE_APP_VAS_RANKURI
console.log(URL,'..')
export default {
  fetchHistory(params) {
    return http.post(URL+'/level/last',params)
  },
  fetchCurrent(params) {
    return http.post(URL+'/level/feed',params)
  },
  fetchRules(params) {
    return http.post(URL+'/level/rule',params)
  },
  fetchAwardItem(issueNo) {
    return http.post(URL+'/level/award/obtain/'+issueNo)
  },
  fetchAwardLogs(params) {
    return http.post(URL+'/level/award/list/logs',params)
  },
}
import http from '../utils/http'

let URL = process.env.VUE_APP_VAS_PLATAPIURI

export default {
  fetchAnnounce(params) {
    return http.post(URL+'/announce',params)
  },
  fetchGame() {
    return http.post(URL+'/game/list')
  },
  fetchRecommendGame() {
    return http.post(URL+'/game/recommend')
  },
  fetchMsg() {
    return http.post(URL+'/message/list')
  },
  accountInfo() {
    return http.post(URL+'/account/infot')
  },
  gameLast() {
    return http.post(URL+'/account/game')
  },
  firstPay() {
    return http.post(URL+'/state/pay')
  },
  todaySign() {
    return http.post(URL+'/state/today')
  },
  gameList() {
    return http.post(URL+'/game/list')
  },
  announceList() {
    return http.post(URL+'/announce/list')
  },
  
}

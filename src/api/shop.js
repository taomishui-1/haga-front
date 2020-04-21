import http from '../utils/http'

let URL = process.env.VUE_APP_VAS_SHOPURI

export default {
  list(token) {
    return http.post(URL+'/payment/mall/welfare', {
        token:token
    })
  },
  
}

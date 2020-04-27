import http from '../utils/http'

let URL = process.env.VUE_APP_VAS_TASKURI

export default {
  fetchPlatTask(params) {
    return http.post(URL+'/task/plat',params)
  },
  fetchAchievementTask() {
    return http.post(URL+'/task/achievement')
  },
  fetchGameTask() {
    return http.post(URL+'/task/game')
  },
  fetchGuideTask() {
    return http.post(URL+'/task/guide')
  },
  finishTask() {
    return http.post(URL+'/task/finish')
  },
  
}

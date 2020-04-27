// import Cookies from 'js-cookie'

const state = {
  gameList: JSON.parse(localStorage.getItem('GAMELIST'))
}

// getters
const getters = {
  getGameList: state => state.gameList
}

// actions
const actions = {
  setGameList({ commit }, gameList) {
    // Cookies.set('token', token)
    localStorage.setItem('GAMELIST',JSON.stringify(gameList))
    // commit('SET_TOKEN', { token })
    commit('SET_GAMELIST', { gameList })
  },
  removeToken({ commit }) {
    localStorage.removeItem('GAMELIST')
    commit('REMOVE_GAMELIST')
  }
}

// mutations
const mutations = {
  // SET_TOKEN(state, { token }) {
  //   state.token = token
  // },
  // REMOVE_TOKEN(state) {
  //   state.token = null
  // }
  SET_GAMELIST(state, { gameList }) {
    state.gameList = gameList
  },
  REMOVE_GAMELIST(state) {
    state.gameList = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

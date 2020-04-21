const state = {
  all: [],
  isLoadRoutes: false
}

// getters
const getters = {
  getMenus: state => state.all,
  isLoadRoutes: state => state.isLoadRoutes
}

// actions
const actions = {
  initMenus({ commit }, menus) {
    commit('INIT_MENU', { menus })
  },

  loadRoutes({ commit }) {
    commit('LOAD_ROUTES')
  },
  removeRoutes({ commit }) {
    commit('REMOVE_ROUTES')
  }
}

// mutations
const mutations = {
  INIT_MENU(state, { menus }) {
    state.all = menus
  },
  LOAD_ROUTES(state) {
    state.isLoadRoutes = true
  },
  REMOVE_ROUTES() {
    state.all = []
    state.isLoadRoutes = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

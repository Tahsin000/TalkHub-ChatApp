const state = {
  message: ''
}

const mutations = {
  setMessage (state, message) {
    state.message = message
  }
}

const actions = {
  async registerUser ({ commit }) {
    // Simulating async action, you can add your async logic here
    await new Promise(resolve => setTimeout(resolve, 1000))
    commit('setMessage', 'Registered successfully!')
  }
}

const getters = {
  // ... any getters you might need
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

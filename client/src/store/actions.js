export default {
  registerBand: ({commit}, payload) => {
    commit('addBand', payload)
  },
  registerConcert: ({commit}, payload) => {
    commit('addConcert', payload)
  },
  registerPerson: ({commit}, payload) => {
    commit('addPerson', payload)
  }
}

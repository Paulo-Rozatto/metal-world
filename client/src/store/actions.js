export default {
  registerBand: ({commit}, payload) => {
    commit('addBand', payload)
  },
  registerPerson: ({commit}, payload) => {
    commit('addPerson', payload)
  }
}

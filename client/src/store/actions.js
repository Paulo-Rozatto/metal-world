import API from '@/services/Api'

export default {
  registerBand: ({ commit }, payload) => {
    return API.post('/band/signup', payload)
  },
  registerConcert: ({ commit }, payload) => {
    commit('addConcert', payload)
  },
  registerPerson: ({ commit }, payload) => {
    commit('addPerson', payload)
  }
}

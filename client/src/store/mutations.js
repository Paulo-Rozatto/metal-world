export default{
  addBand: (state, band) => {
    state.bands.push(band)
  },
  addConcert: (state, {id, location, date}) => {
    state.bands.find(band => band.id === id).concerts.push({location, date})
  },
  addPerson: (state, person) => {
    state.persons.push(person)
  },
  loginUser: (state, user) => {
    state.isLoggedIn = true
    state.user = user
  },
  logoffUser: (state) => {
    state.isLoggedIn = false
    state.user = null
  }
}

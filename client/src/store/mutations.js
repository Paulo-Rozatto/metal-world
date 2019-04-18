export default{
  addBand: (state, band) => {
    state.bands.push(band)
  },
  addGender: (state, gender) => {
    state.user.genres.push(gender)
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

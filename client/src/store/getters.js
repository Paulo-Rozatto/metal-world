export default {
  isCorrectId: (state) => (id) => {
    return state.user._id === id
  },
  getUser: (state) => {
    return state.user
  },
  getBandById: (state) => (id) => {
    return state.bands.find(band => band.id === id)
  },
  getBandsById: (state) => (ids) => {
    let bands = []
    ids.forEach(id => bands.push(
      state.bands.find(band => band.id === id)
    ))
    return bands
  },
  getBand: (state) => (email, password) => {
    return state.bands.find(band => band.email === email && band.password === password)
  },
  getBands: (state) => {
    return state.bands
  },
  getBandsMin: (state) => {
    return state.bands.map(band => ({
      name: band.name,
      genres: band.genres.toString(),
      creation_year: band.creation_year
    }))
  },
  getGenres: (state) => {
    return state.genres
  },
  getPersonById: (state) => (id) => {
    return state.persons.find(person => person.id === id)
  },
  getPerson: (state) => (email, password) => {
    return state.persons.find(person => person.email === email && person.password === password)
  },
  getPersons: (state) => {
    return state.persons
  }
}

export default {
  getBandById: (state) => (id) => {
    return state.bands.find(band => band.id === id)
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

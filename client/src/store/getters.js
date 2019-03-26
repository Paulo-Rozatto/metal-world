export default{
  getBandById: (state) => (id) => {
    return state.bands.find(band => band.id === id)
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
  }
}

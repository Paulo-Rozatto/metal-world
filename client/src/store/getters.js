export default{
  getBandsMin: (state) => {
    return state.bands.map(band => ({
      name: band.name,
      genres: band.genres,
      creation_year: band.creation_year
    }))
  }
}

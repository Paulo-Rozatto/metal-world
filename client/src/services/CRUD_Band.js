import API from './Api'

let readBands = async () => {
  try {
    const response = await API.get('/band/read')
    return response.data
  } catch (err) {
    return null
  }
}

let updateBand = async (band) => {
  try {
    const response = await API.post('/band/update', band)
    if (response.data.success) {
      return ({
        success: true,
        band: response.data.band
      })
    } else {
      return ({
        success: false,
        msg: response.data.err
      })
    }
  } catch (err) {
    return ({
      msg: err.toString()
    })
  }
}

let addConcert = async (band) => {
  try {
    const response = await API.post('/band/addConcert', band)
    if (response.data.success) {
      return ({
        success: true,
        newConcert: response.data.newConcert
      })
    } else {
      return ({
        success: false,
        msg: response.data.err
      })
    }
  } catch (err) {
    return ({
      msg: err.toString()
    })
  }
}

let rmConcert = async (concert) => {
  try {
    const response = await API.post('/band/rmConcert', concert)
    console.log(response)
    if (response.data.success) {
      return ({
        success: true
      })
    } else {
      return ({
        success: false,
        msg: response.data.err
      })
    }
  } catch (err) {
    return ({
      msg: err.toString()
    })
  }
}

export default {
  readBands,
  updateBand,
  addConcert,
  rmConcert
}

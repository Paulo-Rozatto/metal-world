import API from './Api'

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

export default {
  addConcert
}

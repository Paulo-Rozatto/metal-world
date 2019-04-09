import API from './Api'

let loginBand = async (band) => {
  try {
    const response = await API.post('/band/login', band)
    return ({
      isLogged: response.statusText === 'OK',
      band: response.data
    })
  } catch (err) {
    return ({
      isLogged: false,
      msg: err.toString()
    })
  }
}

export default {
  loginBand
}

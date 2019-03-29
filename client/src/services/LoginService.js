import API from './Api'

let loginBand = async (band) => {
  try {
    const response = await API.post('/band/login', band)
    return ({
      isLogged: response.statusText === 'OK',
      band: {
        email: response.data.email,
        password: response.data.password
      }
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

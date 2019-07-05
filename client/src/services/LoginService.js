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

let loginPerson = async (band) => {
  try {
    const response = await API.post('/person/login', band)
    return ({
      isLogged: response.statusText === 'OK',
      person: response.data
    })
  } catch (err) {
    return ({
      isLogged: false,
      msg: err.toString()
    })
  }
}

let logout = () => {
  API.get('/band/logout')
  API.get('/person/logout')
}

export default {
  loginBand,
  loginPerson,
  logout
}

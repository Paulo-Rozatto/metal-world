import API from './Api'

let createPerson = async (person) => {
  try {
    const response = await API.post('/person/signup', person)
    return ({
      success: response.data.success,
      msg: response.data.message
    })
  } catch (err) {
    return ({
      success: false,
      msg: err.toString()
    })
  }
}

let updatePerson = async (person) => {
  try {
    const response = await API.post('/person/update', person)
    if (response.data.success) {
      return ({
        success: true,
        person: response.data.person
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

let followBand = async (person) => {
  try {
    const response = await API.post('/person/newBand', person)
    if (response.data.success) {
      return ({
        success: true,
        person: response.data.person
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

let unfollowBand = async (person) => {
  try {
    const response = await API.post('/person/rmBand', person)
    if (response.data.success) {
      return ({
        success: true,
        person: response.data.person
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

export default{
  createPerson,
  updatePerson,
  followBand,
  unfollowBand
}

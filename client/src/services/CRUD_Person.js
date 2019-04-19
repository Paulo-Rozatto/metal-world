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

export default{
  createPerson
}

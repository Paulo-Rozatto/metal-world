export default {
  isCorrectId: (state) => (id) => {
    return state.user._id === id
  },
  getUser: (state) => {
    return state.user
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

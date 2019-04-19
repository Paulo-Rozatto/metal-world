const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

let personSchema = new Schema({
  email: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  signUpDate: {
    type: Date,
    default: Date.now()
  },
  name: {
    type: String,
    default: ''
  }
})

personSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

personSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('Person', personSchema)

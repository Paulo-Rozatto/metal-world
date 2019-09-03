const LocalStrategy = require('passport-local').Strategy
// const mongoose = require('mongoose')

const Band = require('../models/Band')
const Person = require('../models/Person')

module.exports = function (passport) {
  passport.use(
    'band-strategy',
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      Band.findOne({
        email: email
      }).then(band => {
        if (!band) {
          return done(null, false, { message: 'Email or Password incorrect' })
        }
        if (band.validPassword(password)) {
          return done(null, band)
        } else {
          return done(null, false, { message: 'Email or Password incorrect' })
        }
      })
    })
  )

  passport.use(
    'person-strategy',
    new LocalStrategy({ usernameField: 'email' }, { session: false }, (email, password, done) => {
      // Match user
      Person.findOne({
        email: email
      }).then(person => {
        if (!person) {
          return done(null, false, { message: 'Email or Password incorrect' })
        }
        if (person.validPassword(password)) {
          return done(null, person)
        } else {
          return done(null, false, { message: 'Email or Password incorrect' })
        }
      })
    })
  )

  // passport.serializeUser(function (user, done) {
  //   done(null, user.id)
  // })

  // passport.deserializeUser(function (id, done) {
  //   Band.findById(id, function (err, band) {
  //     done(err, band)
  //   })
  // })
}

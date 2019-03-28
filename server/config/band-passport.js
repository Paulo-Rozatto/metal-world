const LocalStrategy = require('passport-local').Strategy
// const mongoose = require('mongoose')

const Band = require('../models/Band')

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      Band.findOne({
        email: email
      }).then(band => {
        if (!band) {
          return done(null, false, { message: 'That email is not registered' })
        }
        if (band.validPassword(password)) {
          return done(null, band)
        } else {
          return done(null, false, { message: 'Password incorrect' })
        }
      })
    })
  )

  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function (id, done) {
    Band.findById(id, function (err, band) {
      done(err, band)
    })
  })
}

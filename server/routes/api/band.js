const express = require('express')
const passport = require('passport')

const router = express.Router()

const Band = require('../../models/Band')

router.get('/', (req, res) => res.send('hi'))

router.post('/signup', (req, res) => {
  const { body } = req
  const { password } = body
  let creationYear = body.creation_year
  let { email, name, genres, concerts } = body

  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    })
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    })
  }
  if (!name) {
    return res.send({
      success: false,
      message: 'Error: Name cannot be blank.'
    })
  }

  email = email.toLowerCase()
  email = email.trim()

  // Steps:
  // 1. Verify email doesn't exist
  // 2. Save
  Band.find({
    email: email
  }, (err, previousBands) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      })
    } else if (previousBands.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Account already exist.'
      })
    }

    // Save the new band
    const newBand = new Band()

    newBand.email = email
    newBand.password = newBand.generateHash(password)
    newBand.name = name
    // To Do: consitence in camel case creation_year creationYear
    newBand.creation_year = creationYear
    newBand.concerts = concerts
    newBand.genres = genres

    newBand.save((err, band) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        })
      }
      return res.send({
        success: true,
        message: 'Signed up'
      })
    })
  })
}) // end of sign up endpoint

router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) return next(err)
    req.logIn(user, function (err) {
      if (err) { return next(err) }
      return res.json(user)
    })
  })(req, res, next)
})

router.post('/addConcert', (req, res) => {
  let { email, concert } = req.body
  Band.findOne({ email: email }, (err, band) => {
    if (err) {
      res.send({
        success: false,
        msg: err.toString()
      })
    } else if (!band) {
      res.send({
        success: false,
        msg: 'No band was found'
      })
    } else {
      band.concerts.push(concert)
      band.save((err, band) => {
        if (err) {
          return res.send({
            success: false,
            message: err.toString()
          })
        }
        return res.send({
          success: true,
          message: 'Concerts updated',
          newConcert: concert
        })
      })
    }
  })
})

router.post('/rmConcert', (req, res) => {
  let { email, concert } = req.body

  Band.findOne({ email: email }, (err, band) => {
    if (err) {
      res.send({
        success: false,
        msg: err.toString()
      })
    } else if (!band) {
      res.send({
        success: false,
        msg: 'No band was found'
      })
    } else {
      concert = JSON.stringify(concert[0])
      let index = band.concerts.findIndex(e => JSON.stringify(e) === concert)
      if (index === -1) {
        res.send({
          success: false,
          msg: 'No concert was found'
        })
      } else {
        band.concerts.splice(index, 1)
        band.save((err, band) => {
          if (err) {
            return res.send({
              success: false,
              message: err.toString()
            })
          }
          return res.send({
            success: true,
            message: 'Concerts updated'
          })
        })
      }
    }
  })
})

module.exports = router

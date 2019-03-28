const express = require('express')
const passport = require('passport')

const router = express.Router()

const Band = require('../../models/Band')

router.get('/', (req, res) => res.send('hi'))

router.post('/signup', (req, res) => {
  const { body } = req
  const { password } = body
  let { email, name, creationYear, genres, concerts } = body

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
    newBand.creationYear = creationYear
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

router.post('/login',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    res.json(req.user)
  })

module.exports = router

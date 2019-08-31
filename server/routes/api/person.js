const express = require('express')
const passport = require('passport')

const router = express.Router()

const Person = require('../../models/Person')

router.post('/signup', (req, res) => {
  const { password } = req.body
  let { email, name } = req.body

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
  Person.find({
    email: email
  }, (err, previousPersons) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error:' + err.toString()
      })
    } else if (previousPersons.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Account already exist.'
      })
    }

    // Save the new person
    const newPerson = new Person()

    newPerson.email = email
    newPerson.password = newPerson.generateHash(password)
    newPerson.name = name

    newPerson.save((err, band) => {
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
  passport.authenticate('person-strategy', function (err, user, info) {
    if (err) return next(err)
    req.logIn(user, function (err) {
      if (err) { return next(err) }
      return res.json(user)
    })
  })(req, res, next)
})

router.get('/logout', (req, res) => {
  req.logout()
})

router.put('/update', (req, res) => {
  let { name, email, newEmail } = req.body
  Person.findOne({ email: email }, (err, person) => {
    if (err) {
      res.send({
        success: false,
        msg: err.toString()
      })
    } else if (!person) {
      res.send({
        success: false,
        msg: 'No account was found'
      })
    } else {
      person.name = name
      person.email = newEmail

      person.save((err, person) => {
        if (err) {
          return res.send({
            success: false,
            message: err.toString()
          })
        }
        return res.send({
          success: true,
          message: 'Person info updated',
          person: person
        })
      })
    }
  })
})

router.post('/band', (req, res) => {
  let { email, newBand } = req.body
  Person.findOne({ email: email }, (err, person) => {
    if (err) {
      res.send({
        success: false,
        msg: err.toString()
      })
    } else if (!person) {
      res.send({
        success: false,
        msg: 'No account was found'
      })
    } else if (!newBand) {
      res.send({
        success: false,
        msg: 'No band was send'
      })
    } else {
      person.bands.push(newBand)

      person.save((err, person) => {
        if (err) {
          return res.send({
            success: false,
            message: err.toString()
          })
        }
        return res.send({
          success: true,
          message: 'New band added',
          person: person
        })
      })
    }
  })
})

router.delete('/band', (req, res) => {
  let { email, newBand } = req.body
  Person.findOne({ email: email }, (err, person) => {
    if (err) {
      res.send({
        success: false,
        msg: err.toString()
      })
    } else if (!person) {
      res.send({
        success: false,
        msg: 'No account was found'
      })
    } else if (!newBand) {
      res.send({
        success: false,
        msg: 'No band was send'
      })
    } else {
      let index = person.bands.indexOf(newBand)

      if (index === -1) {
        res.send({
          success: false,
          msg: 'No band was found'
        })
      } else {
        person.bands.splice(index, 1)

        person.save((err, person) => {
          if (err) {
            return res.send({
              success: false,
              message: err.toString()
            })
          }
          return res.send({
            success: true,
            message: 'New band added',
            person: person
          })
        })
      }
    }
  })
})

module.exports = router

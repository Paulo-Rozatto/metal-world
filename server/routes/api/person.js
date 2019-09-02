const express = require('express')
const passport = require('passport')

const router = express.Router()

const Person = require('../../models/Person')

router.post('/', (req, res) => {
  const { password } = req.body
  let { email, name } = req.body

  res.status(400)
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
      res.status(500)
      return res.send({
        success: false,
        message: 'Error:' + err.toString()
      })
    }
    if (previousPersons.length > 0) {
      res.status(400)
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

    newPerson.save((err, person) => {
      if (err) {
        res.status(500)
        return res.send({
          success: false,
          message: 'Error: Server error'
        })
      }
      res.status(400)
      return res.send({
        success: true,
        message: 'Signed up',
        location: '/person' + person._id
      })
    })
  })
}) // end of sign up endpoint

router.get('/:id', (req, res) => {
  let id = req.params.id
  Person.findById(id, (err, person) => {
    if (err) {
      res.status(500)
      return res.send({
        success: false,
        msg: err.toString
      })
    }
    return res.send({
      name: person.name,
      bands: person.bands
    })
  })
})

/*
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
*/

router.put('/', (req, res) => {
  let { name, email, newEmail } = req.body
  Person.findOne({ email: email }, (err, person) => {
    if (err) {
      res.status(500)
      return res.send({
        success: false,
        msg: err.toString()
      })
    }
    if (!person) {
      res.status(400)
      return res.send({
        success: false,
        msg: 'No account was found'
      })
    }
    person.name = name
    person.email = newEmail

    person.save((err, person) => {
      if (err) {
        res.status(500)
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
  })
})

router.post('/band', (req, res) => {
  let { email, newBand } = req.body
  Person.findOne({ email: email }, (err, person) => {
    if (err) {
      res.status(500)
      return res.send({
        success: false,
        msg: err.toString()
      })
    }
    if (!person) {
      res.status(400)
      return res.send({
        success: false,
        msg: 'No account was found'
      })
    }
    if (!newBand) {
      res.status(400)
      return res.send({
        success: false,
        msg: 'No band was send'
      })
    }
    person.bands.push(newBand)

    person.save((err, person) => {
      if (err) {
        res.status(500)
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
  })
})

router.delete('/band', (req, res) => {
  let { email, newBand } = req.body
  Person.findOne({ email: email }, (err, person) => {
    if (err) {
      res.status(500)
      return res.send({
        success: false,
        msg: err.toString()
      })
    }
    if (!person) {
      res.status(400)
      return res.send({
        success: false,
        msg: 'No account was found'
      })
    }
    if (!newBand) {
      res.status(400)
      return res.send({
        success: false,
        msg: 'No band was send'
      })
    }
    let index = person.bands.indexOf(newBand)

    if (index === -1) {
      res.status(400)
      res.send({
        success: false,
        msg: 'No band was found'
      })
    } else {
      person.bands.splice(index, 1)

      person.save((err, person) => {
        if (err) {
          res.status(500)
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

module.exports = router

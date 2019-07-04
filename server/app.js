const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const cors = require('cors')

const URI = require('./config/keys').mongoURI

const port = process.env.port || 5000
const app = express()

// Passaport config file
require('./config/local-passport')(passport)

// Conect database
mongoose.connect(URI, { useNewUrlParser: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err))

app.use(express.json())
app.use(cors())
app.use(session({
  secret: require('./config/keys').secret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
// Express body parser
app.use(express.urlencoded({ extended: true }))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/band', require('./routes/api/band.js'))
app.use('/person', require('./routes/api/person.js'))

app.listen(port, () => {
  console.log(`Express listening on port ${port}`)
})

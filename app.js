// Require dependencies

const express = require('express')
const { json } = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const app = express()

// User Auth Dependencies
const session = require('express-session')
const RedisStore = require('connect-redis')
const bcrypt = require('bcrypt')

const { user, password } = require('./auth')

// const MONGODB_URL = 'mongodb://localhost:27017/home-watcher'
const MONGODB_URL = process.env.MONGODB_URL || `mongodb://${user}:${password}@ds137141.mlab.com:37141/home-watcher`

// Allow mongoose to use native promises
mongoose.Promise = Promise

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(json())

app.use('/api/v1', routes)


mongoose.connect(MONGODB_URL)
.then( () => {
  console.log('Connected to Mlab')
  app.listen(PORT)
})
.catch(console.error)

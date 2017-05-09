// Require dependencies

const express = require('express')
const { json } = require('body-parser')
const mongoose = require('mongoose')

const routes = require('./routes')
const app = express()

const MONGODB_URL = 'mongodb://localhost:27017/home-watcher'

// Allow mongoose to use native promises
mongoose.Promise = Promise

const PORT = process.env.PORT || 8080

app.use(json())

app.use('/api/v1', routes)


mongoose.connect(MONGODB_URL)
.then( () => {
  app.listen(PORT)
})
.catch(console.error)

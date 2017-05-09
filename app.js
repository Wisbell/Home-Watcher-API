// Require dependencies

const express = require('express')
const { json } = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const MONGODB_URL = 'mongodb://localhost:27017/home-watcher-media-information'
const PORT = process.env.PORT || 8080

app.use(json())



app.get('/api/v1/', (req, res, next) => {
  console.log('/api/v1/ route visited')

  res.send('Route visited')
})


mongoose.connect(MONGODB_URL)
.then( () => {
  app.listen(PORT)
})
.catch(console.error)

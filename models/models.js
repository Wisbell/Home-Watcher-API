'use strict'

const mongoose = require('mongoose')

const Media = mongoose.model('media', mediaSchema)
const User = mongoose.model('user', userSchema)

const mediaSchema = {
  dateCreated: String,
  mediaType: String,
  url: String
}

const userSchema = {
  dateCreated: String,
  email: String,
  password: String
}

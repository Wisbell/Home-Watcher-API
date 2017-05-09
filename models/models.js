'use strict'

const mongoose = require('mongoose')

// Use this regex to make user input a proper email to register a new account
const HTML5_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const mediaSchema = {
  dateCreated: String,
  mediaType: String,
  url: String
}

const userSchema = {
  dateCreated: String,
  email: {
    type: String,
    lowercase: true,
    required: true,
    match: [HTML5_EMAIL_REGEX, 'Please enter a valid email address'],
    index: { unique: true}
  },
  password: String
}

const Media = mongoose.model('media', mediaSchema)
const User = mongoose.model('user', userSchema)


module.exports = { User, Media }

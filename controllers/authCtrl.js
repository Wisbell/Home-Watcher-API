'use strict'

const { User } = require('../models/models.js')
const mongoose = require('mongoose') // maybe add this to a database.js and require all mongoose instances from it
const bcrypt = require('bcrypt')
// //const session = require('express-session')
// const { session } = require('../app.js')
// // console.log(bcrypt)

module.exports.registerUser = (req, res, err) => {
  console.log('RegisterUser func called')

  let email = req.body.email
  let password = req.body.password

  return new Promise( (resolve, reject) => {
    bcrypt.hash(password, 15, (err, hash) => {
      if (err) {
        reject(err)
      } else {
        resolve(hash)
      }
    })
  })
  .then(hash => User.create({ email, password: hash}))
  .then( () => res.send('User Registered'))
  .catch(console.error)
}


module.exports.loginUser = ({session, body: { email, password }}, res, err) => {
  console.log('loginUser func called')

  User.findOne({ email })
    .then( user => {
      if(user) {
        console.log(user)
        return new Promise((resolve, reject) => {
          bcrypt.compare(password, user.password, (err, matches) => {
            if(err){
              reject(err)
            } else {
              resolve(matches)
            }
          })
        })
      } else {
        console.log("Email does not exist")
      }
    })
    .then( (matches) => {
      if (matches) {
        session.email = email
        console.log('matches, does it redirect?')
        //res.redirect('/')
        res.send({auth: true})
      } else {
        console.log("line 52 was false")
        res.send({auth:false})
      }
    })
}

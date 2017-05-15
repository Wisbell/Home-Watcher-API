'use strict'

const { User } = require('../models/models.js')
const mongoose = require('mongoose') // maybe add this to a database.js and require all mongoose instances from it

module.exports.getUsers = (req, res, err) => {
  console.log('getUsers called in userCtrl')

  User.find()
  .then( (users) => {
    res.json({users})
  })
  .catch(err)
}


module.exports.getUser = (req, res, err) => {
  console.log('getUsers called in userCtrl')

  let id = req.params.id
  User.find()
  .then( (users) => {
    res.json({users})
  })
  .catch(err)
}



module.exports.addUser = (req, res, err) => {
  console.log('addUser called in userCtrl')

  User.create(req.body)
  .then( (user) => {
    res.send('User Created')
  })
  .catch(err)
}

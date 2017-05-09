'use strict'

const { Media } = require('../models/models.js')
const mongoose = require('mongoose') // maybe add this to a database.js and require all mongoose instances from it

module.exports.getAllMedia = (req, res, err) => {
  console.log('getMedia called in mediaCtrl')

  Media.find()
  .then( (media) => {
    res.json({media})
  })
  .catch(err)
}


module.exports.addMedia = (req, res, err) => {
  console.log('addMedia called in mediaCtrl')

  Media.create(req.body)
  .then( (media) => {
    res.send('Media Created')
  })
  .catch(err)
}

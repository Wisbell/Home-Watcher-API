'use strict'

const { Media } = require('../models/models.js')
const mongoose = require('mongoose') // maybe add this to a database.js and require all mongoose instances from it

let findMedia = (url) => {
  Media.find({url: url})
}


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


module.exports.deleteMedia = (req, res, err) => {
  console.log('deleteMedia called in mediaCtrl')

  let awsFileName = req.params.awsFileName
  console.log("awsUrl", awsFileName)

  Media
  .findOneAndRemove({
    awsFileName: awsFileName
  })
  .then((data) => {
    console.log("Collection removed from MongoDB")
    res.json("Collection removed from MongoDB")
  })
}

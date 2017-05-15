'use strict'

const { Router } = require('express')
const router = Router()

// import functions from media controller
const { getAllMedia, addMedia, deleteMedia } = require('../controllers/mediaCtrl')

// get all media
router.get('/media/', getAllMedia)

// add new media
router.post('/media/new', addMedia)

// delete media
router.delete('/media/deleteMedia/:awsFileName', deleteMedia)

module.exports = router

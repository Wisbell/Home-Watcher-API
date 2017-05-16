'use strict'

const { Router } = require('express')
const router = Router()

// import functions from auth controller
const { loginUser, registerUser} = require('../controllers/AuthCtrl')

// login
router.post('/login', loginUser)

// register
router.post('/register', registerUser)

module.exports = router

'use strict'

const { Router } = require('express')
const router = Router()

// import functions from user controller
const { getUsers, getUser, addUser} = require('../controllers/userCtrl')

// get all users
router.get('/users', getUsers)

// get single user by id
router.get('/users/:id', getUser)

// add a new user
router.post('/users/new', addUser)


// delete a user


module.exports = router

'use strict'

const { Router } = require('express')
const router = Router()

// import functions from user controller

router.get('/users', () => {
  console.log('users route visited')
}) // add getUsers callback function

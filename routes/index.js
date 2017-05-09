'use strict'

const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.json({
    "media": "root/api/v1/media",
    "users": "root/api/v1/users"
  })
})


module.exports = router;

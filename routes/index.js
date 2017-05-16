'use strict'

const { Router } = require('express')
const router = Router()

router.use(require('./users'))
router.use(require('./media'))
router.use(require('./authRoute'))

router.get('/', (req, res) => {
  res.json({
    "media": "root/api/v1/media",
    "users": "root/api/v1/users"
  })
})


module.exports = router;

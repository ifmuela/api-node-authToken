const express = require('express')
const auth = require('../middlewares/auth')
const router = express.Router()

const {
  signUp,
  signIn
} = require('../controllers/user')

router.post('/singUp', signUp)
router.post('/signIn', signIn)

module.exports = router

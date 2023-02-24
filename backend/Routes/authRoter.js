const express = require('express')
const { userSignUp, userSignIn } = require('../Controllers/authController')
const router = express.Router()

//-- USER SIGN UP --//
router.post('/signup',userSignUp)

//-- USER SIGN IN --//
router.post('/signin',userSignIn)

module.exports = router
const express = require('express')
const { getAllUsers } = require('../Controllers/userontroller')
const router = express.Router()

//-- GET ALL USERS --//
router.get('/', getAllUsers)


module.exports = router
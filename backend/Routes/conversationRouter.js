const express = require('express')
const { createChat, getSingleChat, sendMessage, getAllMessages } = require('../Controllers/chatController')
const router = express.Router()

//-- CREATE CHAT --//
router.post('/',createChat)

//-- GET SINGLE CHAT --//
router.get('/:userId',getSingleChat)

//-- SEND MESSAGE --//
router.post('/message',sendMessage)

//-- GET ALL MESSAGES --//
router.get('/message/:chatId',getAllMessages)

module.exports = router
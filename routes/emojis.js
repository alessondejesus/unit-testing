const emojis = require('../controllers/emojis')
const express = require('express')
const router = express.Router()

router
    .get('/', emojis.showHomePageEmoji)
    .get('/:emoji', emojis.showEmoji)

module.exports = router
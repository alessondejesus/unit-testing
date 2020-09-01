const showHomePage = require('../controllers/home')
const express = require('express')
const router = express.Router()

router
    .get('/', showHomePage)

module.exports = router
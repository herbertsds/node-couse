const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => {
    res.send('From a new file')
})

module.exports = router
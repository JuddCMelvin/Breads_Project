const express = require('express')
const Bread = require('../Models/breads.js')
const breads = express.Router()

// INDEX
breads.get('/', (req, res) => {
    res.send(Bread)
})

module.exports = breads

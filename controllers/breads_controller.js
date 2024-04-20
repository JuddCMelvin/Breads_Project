const express = require('express')
const Bread = require('../Models/breads.js')
const breads = express.Router()

// INDEX
breads.get('/', (req, res) => {
    res.render('index', {
        breads: Bread
    })
  // res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})

module.exports = breads

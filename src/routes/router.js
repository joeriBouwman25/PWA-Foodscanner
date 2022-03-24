const express = require('express')
const data = require('../controllers/data')
const ui = require('../controllers/ui')

const router = express.Router()

router
  .get('/', ui.getIndex)
  // .get('/loader', ui.showLoader)
  .get('/scanner', ui.getScanner)
  .get('/scanner/:id', data.getDataFromAPI)

module.exports = router

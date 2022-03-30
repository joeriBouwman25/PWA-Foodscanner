const express = require('express')
const data = require('../controllers/data')
const ui = require('../controllers/ui')

const router = express.Router()

router
  .get('/', ui.getIndex)
  .get('/scanner', ui.getScanner)
  .post('/scanner', data.inputBarcode)
  .get('/scanner/:id', ui.renderProduct)


module.exports = router

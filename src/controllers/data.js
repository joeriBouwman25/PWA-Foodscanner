const fetch = require('node-fetch')

const inputBarcode = (req, res) => {
  const input = req.body.barcode
  res.redirect('scanner/' + input)
}

// Fetching Data
const getDataFromAPI = async (req, res) => {
  const url = 'https://world.openfoodfacts.org/api/v0/product/'
  const barcode = req.params.id
    const data = await fetch(url + barcode + 'json')
    const response = await data.json()
    return response
}

module.exports = {
  inputBarcode,
  getDataFromAPI
}

const fetch = require('node-fetch')

const inputBarcode = async (req, res) => {
  const input = await req.body.barcode
  res.redirect('scanner/' + await input)
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

const fetch = require('node-fetch')

const getDataFromAPI = async (req, res) => {
  // Fetching Data
  const url = 'https://world.openfoodfacts.org/api/v0/product/'
  const barcode = req.params.id
  const data = await fetch(url + barcode + 'json')
  const response = await data.json()

  if (response.status === 1) {
    res.render('product', {
      product: response.product,
      nutrients: response.product.nutriments
    })
  } else {
    //   throw error
    res.render('error', {
      barcode: response.code
    })
  }
}

module.exports = {
  getDataFromAPI
}

const { getDataFromAPI } = require("./data")

const getIndex = (req, res) => {
  res.render('home')
}

const getScanner = (req, res) => {
  res.render('scanner')
}

const getOffline = (req, res) => {
  res.render('offline')
}

const renderProduct = async (req, res)  => {
  const response = await getDataFromAPI(req, res)
  
  if(response.status === 1) {
  res.render('product', {
    product: response.product,
    nutrients: response.product.nutriments
    })
  } else {
    res.render('error', {
      barcode: response.code
    })
  }
}

module.exports = {
  getIndex,
  getScanner,
  getOffline,
  renderProduct
}

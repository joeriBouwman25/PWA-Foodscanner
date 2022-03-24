
const getIndex = (req, res) => {
  res.render('home')
}

const getScanner = (req, res) => {
  res.render('scanner')
}

const showLoader = (req, res) => {
  res.render('loader')
}

module.exports = {
  getIndex,
  getScanner,
  showLoader
}

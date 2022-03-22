
const getIndex = (req, res) => {
  res.render('home')
}

const getScanner = (req, res) => {
  res.render('scanner')
}

module.exports = {
  getIndex,
  getScanner
}

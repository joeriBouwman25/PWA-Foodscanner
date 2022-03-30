const express = require('express')
const handlebars = require('express-handlebars')

// eslint-disable-next-line no-unused-vars
const path = require('path')
const routes = require('./src/routes/router')


const app = express()
const port = 3000

app
  .set('view engine', 'hbs')
  .set('views', 'src/views')
  .engine('hbs', handlebars({ extname: 'hbs' }))

  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(express.static('public'))
  .use(routes)

app.listen(port, () => {
  console.log(`Server running on port ${port}🎉`)
})

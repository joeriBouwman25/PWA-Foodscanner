const express = require('express')
const handlebars = require('express-handlebars')
const compression = require('compression')
const uglifyJS = require('uglify-js')

// eslint-disable-next-line no-unused-vars
const path = require('path')
const routes = require('./src/routes/router')


const app = express()
const port = 3000

const setCache = (req, res, next) => {
  const period = 365 * 24 * 60 * 60 
  if (req.method == 'GET') {
    res.set('Cache-control', `public, max-age=${period}`)
  } else {
    res.set('Cache-control', `no-store`)
  }
  next()
}

app
  .set('view engine', 'hbs')
  .set('views', 'views')
  .engine('hbs', handlebars({ extname: 'hbs' }))

  .use(setCache)
  .use(compression())

  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(express.static('public'))
  .use(routes)
  
  .listen(port, () => {
  console.log(`Server running on port ${port}🎉`)
})

const result = uglifyJS.minify(['client.js'])
console.log(result.code)



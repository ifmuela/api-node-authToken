'use strict'

const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan')

const app = express()

const productRoutes = require('./routes/product')
const userRoutes = require('./routes/user')

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())

// routes
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

module.exports = app

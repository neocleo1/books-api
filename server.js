// DEPENDCIES
const express = require('express')
const mongoose = require('mongoose')

//CONFGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to mongo: ', process.env.MONGO_URI)
  }
)

//MIDDLEWARE
app.use(express.json())

//ROUTES
app.get('/', function (req, res) {
  res.send('Hello world')
})

//Books
const booksController = require('./controllers/books_controllers.js')
app.use('/books', booksController)

//LISTEN
app.listen(PORT, () => {
  console.log('Reading....')
})

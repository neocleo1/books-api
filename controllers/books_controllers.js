//DEPENDENCIES
const express = require('express')
const { create } = require('../models/index')
const books = express.Router()
const Book = require('../models/index')

books.get('/seed', (req, res) => {
  Book.insertMany([
    {
      title: 'The Shinobi Initiative',
      description:
        'The reality-bending adventures of a clandestine service agency in the year 2166',
      year: 2014,
      quantity: 10,
      imageURL: 'https://imgur.com/LEqsHy5.jpeg',
    },
    {
      title: 'Tess the Wonder Dog',
      description: 'The tale of a dog who gets super powers',
      year: 2007,
      quantity: 3,
      imageURL: 'https://imgur.com/cEJmGKV.jpg',
    },
    {
      title: 'The Annals of Arathrae',
      description:
        'This anthology tells the intertwined narratives of six fairy tales.',
      year: 2016,
      quantity: 8,
      imageURL: 'https://imgur.com/VGyUtrr.jpeg',
    },
    {
      title: 'W∀RP',
      description:
        "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
      year: 2010,
      quantity: 4,
      imageURL: 'https://imgur.com/qYLKtPH.jpeg',
    },
  ])
    .then(
      res.status(200).json({
        message: 'Seed successful',
      })
    )
    .catch(
      res.status(400).json({
        message: 'Seed unsuccessful',
      })
    )
})

// INDEX
books.get('/', (req, res) => {
  Book.find().then((foundBook) => {
    res.json(foundBook)
  })
})

//SHOW
books.get('/:id', (req, res) => {
  Book.findById(req.params.id).then((foundBook) => {
    res.json(foundBook)
  })
})

//PUT (didnt know what to put for this one)
books.put('/:id', (req, res) => {})

//DELETE
books.delete('/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id).then((deletedBook) => {
    res.json({ message: 'deleted!' })
  })
})

//POST(didnt know what to put for this one)
books.get('/', (req, res) => {})

//EXPORT
module.exports = books

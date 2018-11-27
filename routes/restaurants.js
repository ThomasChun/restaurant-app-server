'use strict';
const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');

router.get('/', (req, res, next) => {
  Restaurant.find()
    .then(results => {
      res.json(results);
    })
    .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const { name, yelpId, address, rating, price, image, url, categories, reviewCount, transactions, phone, collectionId } = req.body;
  const newRestaurant = { name, yelpId, address, rating, price, image, url, categories, reviewCount, transactions, phone, collectionId };

  if (!name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  Restaurant.create(newRestaurant)
    .then(result => {
      res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
    })
    .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  
  Restaurant.findOneAndRemove({ _id: id })
    .then(() => {
      res.sendStatus(204);
    })
    .catch(err => next(err));
});

module.exports = router;

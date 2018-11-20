'use strict';
const express = require('express');
const router = express.Router();
const Collection = require('../models/collection');

router.get('/', (req, res, next) => {
  Collection.find()
    .then(results => {
      res.json(results);
    })
    .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const { name } = req.body;
  const newCollection = { name };

  if (!name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  Collection.create(newCollection)
    .then(result => {
      res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
    })
    .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  
  Collection.findOneAndRemove({ _id: id })
    .then(() => {
      res.sendStatus(204);
    })
    .catch(err => next(err));
});

module.exports = router;
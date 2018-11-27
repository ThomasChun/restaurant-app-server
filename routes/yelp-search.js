'use strict';
const express = require('express');
const router = express.Router();
const YelpSearch = require('../models/yelp-search');
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_API_KEY);

router.get('/', (req, res, next) => {
  YelpSearch.find()
    .then(result => {
      res.json(result);
    })
    .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const { name, location } = req.body;

  client.search({
    term: name,
    location: location,
  })
    .then(response => {
      const restaurantsSearchResult = response.jsonBody.businesses;
      let filteredSearchData = restaurantsSearchResult.map(restaurant => {
        return {
          name: restaurant.name,
          id: restaurant.id,
          rating: restaurant.rating,
          price: restaurant.price,
          address: `${restaurant.location.address1}, ${restaurant.location.city}, ${restaurant.location.state} ${restaurant.location.zip_code}`,
          image: restaurant.image_url,
          url: restaurant.url,
          categories: restaurant.categories,
          reviewCount: restaurant.review_count,
          transactions: restaurant.transactions,
          phone: restaurant.display_phone,
        };
      });
      return filteredSearchData;
    })
    .then(result => {
      const search = { searchResult: result };
      return YelpSearch.create(search);
    })
    .then(result => {
      res.location(`${req.originalUrl}`).status(201).json(result);
    })
    .catch(err => next(err));
});

router.delete('/', (req, res, next) => {
  YelpSearch.remove()
    .then(() => {
      res.sendStatus(204);
    })
    .catch(err => next(err));
});

module.exports = router;
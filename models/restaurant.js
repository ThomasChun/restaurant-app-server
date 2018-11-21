'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {type: String},
  collectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Collection' }
});

schema.set('timestamps', true);

// Transform output during `res.json(data)`, `console.log(data)` etc.
schema.set('toJSON', {
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
  }
});

module.exports = mongoose.model('Restaurant', schema);
'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const sinon = require('sinon');
const { TEST_DATABASE_URL } = require('../config');
const app = require('../index');
const Restaurant = require('../models/restaurant');
const Collection = require('../models/collection');
const {collections, restaurants} = require('../db/data');

chai.use(chaiHttp);
const expect = chai.expect;
const sandbox = sinon.createSandbox();

describe('Restaurants API', function () {

  before(function () {
    return mongoose.connect(TEST_DATABASE_URL, { useNewUrlParser: true })
      .then(() => Promise.all([
        Collection.createIndexes(),
        Restaurant.createIndexes()
      ]));
  });

  beforeEach(function () {
    return Promise.all([
      Collection.insertMany(collections),
      Restaurant.insertMany(restaurants),
    ]);
  });

  afterEach(function () {
    sandbox.restore();
    return Promise.all([
      Collection.deleteMany(),
      Restaurant.deleteMany(),
    ]);
  });

  after(function () {
    return mongoose.connection.db.dropDatabase()
      .then(() => mongoose.disconnect());
  });
});

describe('GET /api/restaurants', function () {
  it('should return the correct number of restaurants', () => {
    return Promise.all([
      chai.request(app)
        .get('/api/restaurants')
    ])
      .then(([data, res]) => {
        expect(res).to.have.status.apply(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(data.length);
      });
  });
});
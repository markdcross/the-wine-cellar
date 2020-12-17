var mongoose = require('mongoose');
var db = require('../models');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/winecellardb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

const beerSeed = [
  {
    beer_name: 'Nuclear Nugget',
    beer_style: 'Imperial IPA',
    beer_brewery: 'Lickinghole Creek',
    beer_description: 'Delicious',
    beer_rating: 8.5,
    beer_num_bottles: 0,
    beer_consumed: true
  },
  {
    beer_name: 'Nuclear Nugget2',
    beer_style: 'Imperial IPA2',
    beer_brewery: 'Lickinghole Creek',
    beer_description: 'Delicious2',
    beer_rating: 8.5,
    beer_num_bottles: 0,
    beer_consumed: true
  }
];

const brewerySeed = [
  {
    name: 'Lickinghole Creek',
    country: 'USA',
    region: 'Virginia'
  }
];

const wineSeed = [
  {
    name: 'Bowhouse Red',
    style: 'Red Blend',
    winery: 'Barrel Oak Winery',
    description: 'Delicious',
    rating: 8.5,
    num_bottles: 0,
    consumed: true
  },
  {
    name: 'Bowhouse White',
    style: 'White Blend',
    winery: 'Barrel Oak Winery',
    description: 'Delicious2',
    rating: 8.5,
    num_bottles: 0,
    consumed: true
  }
];

const winerySeed = [
  {
    name: 'Barrel Oak Winery',
    country: 'USA',
    region: 'Virginia'
  }
];

db.Beer.deleteMany({})
  .then(() => db.Beer.collection.insertMany(beerSeed))
  .then((data) => {
    console.log(data.result.n + ' beer records inserted!');
  })
  .catch((err) => {
    console.error(err);
  });

db.Brewery.deleteMany({})
  .then(() => db.Brewery.collection.insertMany(brewerySeed))
  .then((data) => {
    console.log(data.result.n + ' brewery records inserted!');
  })
  .catch((err) => {
    console.error(err);
  });

db.Wine.deleteMany({})
  .then(() => db.Wine.collection.insertMany(wineSeed))
  .then((data) => {
    console.log(data.result.n + ' wine records inserted!');
  })
  .catch((err) => {
    console.error(err);
  });

db.Winery.deleteMany({})
  .then(() => db.Winery.collection.insertMany(winerySeed))
  .then((data) => {
    console.log(data.result.n + ' winery records inserted!');
  })
  .catch((err) => {
    console.error(err);
  });

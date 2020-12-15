// TODO Add Mongoose schema (look at fitness-tracker homework)
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BrewerySchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  country: {
    type: String
  },
  region: {
    type: String
  }
});

const Brewery = mongoose.model('Brewery', BrewerySchema);

module.exports = Brewery;

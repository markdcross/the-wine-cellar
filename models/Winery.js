// TODO Add Mongoose schema (look at fitness-tracker homework)
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WinerySchema = new Schema({
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

const Winery = mongoose.model('Winery', WinerySchema);

module.exports = Winery;

// TODO Add Mongoose schema (look at fitness-tracker homework)
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BeerSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Enter the name of the beer'
  },
  brewery: [
    {
      type: Schema.Types.ObjectId,
      trim: true,
      required: 'Enter the name of the brewery',
      ref: 'Brewery'
    }
  ],
  style: {
    type: String
  },
  description: {
    type: String
  },
  rating: {
    type: Number
  },
  num_bottles: {
    type: Number
  },
  consumed: {
    type: Boolean
  }
});

// TODO Add association to brewery model

const Beer = mongoose.model('Beer', BeerSchema);

module.exports = Beer;

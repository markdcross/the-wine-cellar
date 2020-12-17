// TODO Add Mongoose schema (look at fitness-tracker homework)
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WineSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Enter the name of the wine'
  },
  winery: {
    type: Schema.Types.ObjectId,
    trim: true,
    required: 'Enter the name of the winery',
    ref: 'Winery'
  },
  year: {
    type: Number
  },
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

const Wine = mongoose.model('Wine', WineSchema);

module.exports = Wine;

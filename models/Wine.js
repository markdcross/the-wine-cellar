// TODO Add Mongoose schema (look at fitness-tracker homework)
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WineSchema = new Schema({
  name: {
    type: String
  },
  winery: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Winery'
    }
  ],
  year: {
    type: Number
  }
});

// TODO Add association to winery model

const Wine = mongoose.model('Wine', WineSchema);

module.exports = Wine;

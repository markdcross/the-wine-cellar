const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CellarSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  wine: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Wine'
    }
  ],
  beer: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Beer'
    }
  ]
});

const Cellar = mongoose.model('User', CellarSchema);

module.exports = Cellar;

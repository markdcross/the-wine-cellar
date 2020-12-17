const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user_name: {
    type: String,
    unique: true
  },
  beer: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Beer'
    }
  ],
  wine: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Wine'
    }
  ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

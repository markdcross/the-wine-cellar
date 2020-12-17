const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    unique: true
  },
  displayName: {
    type: String
  },
  emails: [
    {
      type: String,
      unique: true
    }
  ],
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

var records = [
  {
    id: 1,
    username: 'jack',
    password: 'secret',
    displayName: 'Jack',
    emails: [{ value: 'jack@example.com' }]
  },
  {
    id: 2,
    username: 'jill',
    password: 'birthday',
    displayName: 'Jill',
    emails: [{ value: 'jill@example.com' }]
  }
];

exports.findById = function (id, cb) {
  process.nextTick(function () {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
};

exports.findByUsername = function (username, cb) {
  process.nextTick(function () {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
};
const User = mongoose.model('User', UserSchema);
module.exports = User;

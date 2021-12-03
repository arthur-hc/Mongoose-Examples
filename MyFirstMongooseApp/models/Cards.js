const mongoose = require('mongoose');


module.exports = mongoose.model('Cards', {
  name: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  power: {
    type: Number,
    required: true
  },
});

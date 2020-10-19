const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  board: {
    type: String,
    trim: true
  },
  color: {
    type: String,
    trim: true,
  },
  brand: {
    type: String,
    trim: true,
  }
})

module.exports = mongoose.model('Car', schema);

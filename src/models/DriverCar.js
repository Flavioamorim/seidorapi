const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  init_date: {
    type: Date,
    required: true,
    default: Date.now
  },
  end_date: {
    type: Date,
    required: true,
    default: Date.now
  },
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver'
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car'
  },
  description: {
    type: String,
    trim: true,
  }
})

module.exports = mongoose.model('DriverCar', schema);

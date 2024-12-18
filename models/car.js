const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  model: String,
  location: String,
  pricePerDay: Number,
  availability: Boolean,
});

module.exports = mongoose.model('Car', carSchema);


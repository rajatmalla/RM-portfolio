const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: String,
  carId: String,
  pickupTime: Date,
  dropoffTime: Date,
  status: String,
});

module.exports = mongoose.model('Booking', bookingSchema);

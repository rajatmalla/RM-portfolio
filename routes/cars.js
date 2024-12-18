const express = require('express');
const Car = require('../models/car');
const router = express.Router();

// Add a new car
router.post('/', async (req, res) => {
  const car = new Car(req.body);
  await car.save();
  res.status(201).json(car);
});

// Get all available cars
router.get('/', async (req, res) => {
  const { location } = req.query;
  const cars = await Car.find({ location, availability: true });
  res.status(200).json(cars);
});

module.exports = router;

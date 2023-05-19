const Car = require('../models/Car');
const Employee = require('../models/Employee');
const { seedCars } = require('./seedCars');

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    if (cars.length < 1) {
      seedCars();
      const cars = await Car.find();
      return res.status(200).json({
        ok: true,
        cars,
      });
    }
    return res.status(200).json({
      ok: true,
      cars,
    });
  } catch (error) {
    console.log(error);
    return res.status(503).json({
      ok: false,
      msg: 'Something happened',
    });
  }
};

module.exports = {
  getAllCars,
};

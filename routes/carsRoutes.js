const express = require('express');
const { loginEmployee } = require('../controllers/employeeControllers');
const { getAllCars } = require('../controllers/carsControllers');
const checkJWT = require('../middlewares/jwt');

const router = express.Router();

router.get('/allCars', checkJWT, getAllCars);

module.exports = router;

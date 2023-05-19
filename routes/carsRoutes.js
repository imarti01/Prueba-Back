const express = require('express');
const { getAllCars } = require('../controllers/carsControllers');
const checkJWT = require('../middlewares/checkJWT');

const router = express.Router();

router.get('/allCars', checkJWT, getAllCars);

module.exports = router;

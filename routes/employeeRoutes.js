const express = require('express');
const {
  loginEmployee,
  changeFavCar,
} = require('../controllers/employeeControllers');
const checkJWT = require('../middlewares/checkJWT');

const router = express.Router();

router.post('/login', loginEmployee);
router.post('/favCar', checkJWT, changeFavCar);

module.exports = router;

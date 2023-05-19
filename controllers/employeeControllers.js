const bcrypt = require('bcryptjs');
const Employee = require('../models/Employee');
const generateJWT = require('../helpers/generateJWT');

// const createEmployee = async (req, res) => {
//   const salt = bcrypt.genSaltSync(10);
//   const hashedPassword = bcrypt.hashSync('12345', salt);

//   const newUser = new Employee({
//     name: 'Isaura',
//     numEmployee: '342516',
//     password: hashedPassword,
//   });

//   await newUser.save();
// };

const loginEmployee = async (req, res) => {
  const { numEmpleado, password } = req.body;

  try {
    const employee = await Employee.findOne({
      numEmployee: numEmpleado,
    }).populate('favCar');

    if (!employee) {
      return res.status(503).json({
        ok: false,
        msg: 'User and password do not match',
      });
    }

    const isValidPassword = await bcrypt.compare(password, employee.password);

    if (!isValidPassword) {
      return res.status(503).json({
        ok: false,
        msg: 'User and password do not match',
      });
    }

    const token = await generateJWT(employee._id);

    const { numEmployee, name } = employee;

    return res.status(200).json({
      ok: true,
      employee: { numEmployee, name, token, favCar: employee?.favCar },
    });
  } catch (error) {
    console.log(error);
    return res.status(503).json({
      ok: false,
      msg: 'Something happened',
    });
  }
};

const changeFavCar = async (req, res) => {
  const { carId, numEmployee } = req.body;
  try {
    await Employee.findOneAndUpdate({ numEmployee }, { favCar: carId });

    return res.status(200).json({
      ok: true,
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
  loginEmployee,
  changeFavCar,
};

const { Schema, model } = require('mongoose');

const EmployeeSchema = new Schema({
  numEmployee: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  favCar: {
    type: Schema.Types.ObjectId,
    ref: 'Car',
    required: false,
  },
});

module.exports = model('Employee', EmployeeSchema);

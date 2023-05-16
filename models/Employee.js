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
});

module.exports = model('Employee', EmployeeSchema);

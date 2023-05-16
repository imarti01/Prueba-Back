const { Schema, model } = require('mongoose');

const CarSchema = new Schema({
  brand: { type: String, required: true },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
});

module.exports = model('Car', CarSchema);

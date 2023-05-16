const express = require('express');
const cors = require('cors');
const { connectDb } = require('./db/config');
const helmet = require('helmet');
require('dotenv').config();

const employeeRoutes = require('./routes/employeeRoutes');
const carsRoutes = require('./routes/carsRoutes');

const app = express();

connectDb();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use('/employee', employeeRoutes);
app.use('/cars', carsRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port: ${process.env.PORT || 5000}`);
});

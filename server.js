const express = require('express');
const cors = require('cors');
const { connectDb } = require('./db/config');
const helmet = require('helmet');
require('dotenv').config();

const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

connectDb();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use('/employee', employeeRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port: ${process.env.PORT || 5000}`);
});

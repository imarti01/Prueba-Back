const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateJWT = (id = '') => {
  return new Promise((resolve, reject) => {
    const payload = { id };

    jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      { expiresIn: '4h' },
      (err, token) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = generateJWT;

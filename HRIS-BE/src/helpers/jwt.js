const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const secretKey = process.env.SECRET_KEY

const convertToToken = (payload) => {
  return jwt.sign(payload, secretKey);
};

const convertToPayload = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = { convertToToken, convertToPayload };
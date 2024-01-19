"use strict"
const bcrypt = require("bcryptjs");

const hash = (password) => {
  const hash = bcrypt.hashSync(password, 8);
  return hash;
};

const compare = (userInput, password) => {
  const valid = bcrypt.compareSync(userInput, password);
  return valid;
};

module.exports = { hash, compare }

"use strict";

const errorHandler = (err, req, res, next) => {
  const { name, errors } = err;
  let code = 500;
  let message = "Internal Server Error";

  if (name === "Username cannot be empty") {
    code = 400;
    message = name;
  } else if (name === "Name cannot be empty") {
    code = 400;
    message = name;
  } else if (name === "Email cannot be empty") {
    code = 400;
    message = name;
  } else if (name === "Password cannot be empty") {
    code = 400;
    message = name;
  } else if (name === "Type cannot be empty") {
    code = 400;
    message = name;
  } else if (name === "Invalid password") {
    code = 401;
    message = name;
  } else if (name === "INVALID TOKEN" || name === "JsonWebTokenError") {
    code = 401;
    message = "Invalid Token";
  }

  res.status(code).json({ message });
};

module.exports = errorHandler;
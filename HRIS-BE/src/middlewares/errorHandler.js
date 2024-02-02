"use strict";

const errorHandler = (err, req, res, next) => {
  const { name, errors } = err;
  let code = 500;
  let message = "Internal Server Error";

  if (name === "Username cannot be empty" || name === "Name cannot be empty" || name === "Email cannot be empty" || name === "Password cannot be empty" || name === "Type cannot be empty") {
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
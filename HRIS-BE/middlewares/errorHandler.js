"use strict";

const errorHandler = (err, req, res, next) => {
  const { name, errors } = err;
  console.log(name);
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
  } else if (name === "SequelizeValidationError") {
    code = 400;
    message = "Invalid email format";
  } else if (name === "SequelizeUniqueConstraintError") {
    code = 400;
    message = "Email must be unique";
  } else if (name === "Password cannot be empty") {
    code = 400;
    message = name;
  } else if (name === "Location cannot be empty") {
    code = 400;
    message = name;
  } else if (name === "Type cannot be empty") {
    code = 400;
    message = name;
  } else if (
    name === "User not found" ||
    name === "Project not found" ||
    name === "Company not found"
  ) {
    code = 404;
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
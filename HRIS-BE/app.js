"use strict"


  const express = require("express");
  const app = express();
  const users = require("./routes/users");
  const companies = require("./routes/companies");
  const cors = require("cors");
  const errorHandler = require("./middlewares/errorHandler");
  
  
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.use("/users", users);
  app.use("/companies", companies);
  app.use(errorHandler);
  
  module.exports = app;
  
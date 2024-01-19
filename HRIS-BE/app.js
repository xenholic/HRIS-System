"use strict"

  const express = require("express");
  const app = express();
  const router = require("./src/routers/index");
  const cors = require("cors");
  const errorHandler = require("./src/middlewares/errorHandler");
  const mongooseconnect = require("./src/config/config");
  
  mongooseconnect();
  
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.use("/", router);

  app.use(errorHandler);
  
  module.exports = app;
  
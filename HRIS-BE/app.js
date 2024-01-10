"use strict"


  const express = require("express");
  const app = express();
  const router = require("./routers/index");
  const cors = require("cors");
  const errorHandler = require("./middlewares/errorHandler");
  const mongooseconnect = require("./config/config");
  
  mongooseconnect();
  
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.use("/", router);

  app.use(errorHandler);
  
  module.exports = app;
  
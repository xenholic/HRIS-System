"use strict"


  const express = require("express");
  const app = express();
  const users = require("./routes/users");
  const companies = require("./routes/companies");
  const cors = require("cors");
  const errorHandler = require("./middlewares/errorHandler");
  
  // const upload = require("./multer/multer"); //ujicoba
  
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.use("/users", users);
  app.use("/companies", companies);
  app.use(errorHandler);
  
  // //ujicoba multer
  // app.post("/single", upload.single("attachment"), (req, res) => {
  //   //key image
  //   console.log(req.file);
  //   res.send("single file upload success");
  // });
  
  module.exports = app;
  
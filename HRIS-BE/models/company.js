const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  registerCompanyNumber: {
    type: String,
  },
  incorporationDate: {
    type: Date,
  },
  city: {
    type: String,
  },
  postalCode: {
    type: Number,
  },
  website: {
    type: String,
  },
  facebook: {
    type: String,
  },
  instagram: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  twitter: {
    type: String,
  },
  logo: {
    type: String,
  },
  description: {
    type: String,
  },
  industry: {
    type: String,
  },
  value: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
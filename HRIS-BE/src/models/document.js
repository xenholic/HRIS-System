const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  document: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
  },
  updatedBy: {
    type: String,
  },
});

const Document = mongoose.model("Document", documentSchema);

module.exports = Document;
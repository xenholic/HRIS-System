const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    status: {
        type: String,
    },
    action: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedBy: {
        type: String,
    },
    updatedAt: {
        type: Date,
    },
});

const History = mongoose.model("History", historySchema);

module.exports = History;
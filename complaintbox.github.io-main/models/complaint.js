const mongoose = require('mongoose');
const dbconnect = require('../db');

// Call the db to connect to the MongoDB
dbconnect();

// Complaint Schema
const ComplaintSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  contact: {
    type: String
  },
  desc: {
    type: String
  },
  timestamp: {
    type: String,
    default: function () {
      return new Date().toLocaleTimeString();
    }
  }
});

const Complaint = module.exports = mongoose.model('Complaint', ComplaintSchema);

module.exports.registerComplaint = function (newComplaint, callback) {
  newComplaint.save(callback);
}

module.exports.getAllComplaints = function (callback) {
  Complaint.find(callback).sort({ timestamp: -1 }).limit(4);
}

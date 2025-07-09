// models/Complaint.js
const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  issue: String,
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Complaint", complaintSchema);

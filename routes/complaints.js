// routes/complaints.js
const express = require("express");
const Complaint = require("../models/Complaint");
const router = express.Router();

// Submit a new complaint
router.post("/", async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.status(201).json(complaint);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get complaints by email
router.get("/:email", async (req, res) => {
  try {
    const complaints = await Complaint.find({ email: req.params.email });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin: get all complaints
router.get("/", async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update complaint status
router.put("/:id", async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(complaint);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

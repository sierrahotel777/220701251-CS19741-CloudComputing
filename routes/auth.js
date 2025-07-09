// routes/auth.js
const express = require("express");
const router = express.Router();

// Mock login endpoint
router.post("/login", (req, res) => {
  const { email, role } = req.body;

  if (!email || !role) {
    return res.status(400).json({ message: "Missing email or role" });
  }

  res.json({ message: "Login success", email, role });
});

module.exports = router;

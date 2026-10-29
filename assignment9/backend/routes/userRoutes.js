const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET /api/users -> returns all users (oldest first)
router.get('/', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: 1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});

// POST /api/users -> creates a new user, returns the saved user (201);
// validate name/email, return 400 on missing fields and on duplicate email.
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email || !name.trim() || !email.trim()) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const existingUser = await User.findOne({ email: trimmedEmail });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = new User({
      name: name.trim(),
      email: trimmedEmail,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(500).json({ message: 'Error saving user', error: error.message });
  }
});

module.exports = router;

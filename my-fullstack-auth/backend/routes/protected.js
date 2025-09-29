// backend/routes/protected.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    message: 'Protected profile data',
    user: req.user
  });
});

module.exports = router;

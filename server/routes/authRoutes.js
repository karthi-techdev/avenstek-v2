const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// @desc Auth user & get token
// @route POST /api/auth/login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase().trim() });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

// @desc Get user profile
// @route GET /api/auth/profile
// @access Private
const { protect } = require('../middleware/auth');
router.get('/profile', protect, async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.json({
            _id: user._id,
            email: user.email
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = router;

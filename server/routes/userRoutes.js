// server/routes/userRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { createUser, getUsers } = require('../controllers/userController');
const adminController = require('../controllers/adminController'); // Import adminController
const { authenticate, requireAdmin } = require('../middleware/auth'); // Import middleware

const router = express.Router();

// POST /api/users
router.post('/', createUser);

// GET /api/users
router.get('/', getUsers);

// POST /api/users/login (Admin login route)
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Ensure the user is an admin
        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id, role: user.role }, 'secret-key', { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET /api/users/admin-data (Protected admin route)
router.get('/admin-data', authenticate, requireAdmin, adminController.getData);

module.exports = router;

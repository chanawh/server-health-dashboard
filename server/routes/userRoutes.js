// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../controllers/userController');

// POST /api/users
router.post('/', createUser);

// GET /api/users
router.get('/', getUsers);

module.exports = router;

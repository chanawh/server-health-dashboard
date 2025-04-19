// server/routes/serverRoutes.js
const express = require('express');
const router = express.Router();
const { getHome } = require('../controllers/serverController');
const { getServers } = require('../controllers/serverController'); // <-- import new controller

// GET /
router.get('/', getHome);

// GET /api/servers
router.get('/servers', getServers);  // <-- add the new route

module.exports = router;

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const serverRoutes = require('./routes/serverRoutes');
const userRoutes = require('./routes/userRoutes'); // ← import user routes

dotenv.config();

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));  // Allow your frontend to access the backend
app.use(express.json());

// Connect to DB
connectDB();

// Base Routes
// app.use('/', serverRoutes);
app.use('/api', serverRoutes);  // <-- Map the /api path to the serverRoutes

// API Routes
app.use('/api/users', userRoutes); // ← now handles GET/POST for users

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

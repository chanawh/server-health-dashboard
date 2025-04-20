const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

async function createAdmin() {
  const existing = await User.findOne({ username: 'admin' });
  if (existing) {
    console.log('Admin user already exists.');
    return process.exit();
  }

  const admin = new User({
    username: 'admin',
    password: 'admin123', // 👈 Use env vars or secure this better in production
    role: 'admin',
  });

  await admin.save();
  console.log('✅ Admin user created');
  process.exit();
}

createAdmin();

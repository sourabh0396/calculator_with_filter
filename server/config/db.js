// config/db.js
const mongoose = require('mongoose');
const logger = require('./logger');

// MongoDB connection URI, replace with your MongoDB URI or use environment variables
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/calculator-logs';
// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    logger.error(`Error connecting to MongoDB: ${err.message}`);
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;

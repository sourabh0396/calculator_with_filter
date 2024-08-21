const mongoose = require('mongoose');
const logger = require('./logger');
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/calculator-logs';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://sourabhpatil0369:E03jEzYLpOiI30z2@cluster0.uscvgdc.mongodb.net/';
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://sourabhpatil0369:EbyytSSzFpPjxy9v@cluster0.h6lnfl5.mongodb.net/';

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

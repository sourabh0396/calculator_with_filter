// routes/logRoutes.js
const express = require('express');
const math = require('mathjs');
const CalculatorLog = require('../models/CalculatorLog');
const logger = require('../config/logger');

const router = express.Router();

// Helper function to handle database operations
const handleDbOperation = (operation) => async (req, res, next) => {
  try {
    await operation(req, res);
  } catch (error) {
    logger.error(`Database operation error: ${error.message}`);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// POST /api/logs - Log a new calculator expression
// router.post('/logs', handleDbOperation(async (req, res) => {
//   const { expression } = req.body;
//   if (!expression) {
//     logger.info('Received an empty expression');
//     return res.status(400).json({ message: 'Expression is empty' });
//   }
//   let output = null;
//   let isValid = true;
//   try {
//     output = math.evaluate(expression);
//     output = parseFloat(output.toFixed(2)); // Format to 2 decimal places
//     isValid = true;
//   } catch (err) {
//     logger.warn(`Invalid expression attempted: ${expression}`);
//   }
  
//   const calculatorLog = new CalculatorLog({ expression, isValid, output });
//   await calculatorLog.save();
//   logger.info(`Expression logged: ${expression} | Valid: ${isValid}`);

//   return res.json({
//     message: isValid ? `Expression evaluated to ${output}` : 'Invalid expression',
//     output: isValid ? output : null,
//     isValid
//   });
// }));

// // latest 10 calculator logs
// router.get('/logs', handleDbOperation(async (req, res) => {
//   const logs = await CalculatorLog.find().sort({ createdOn: -1 }).limit(10).exec();
//   logger.info('Successfully retrieved logs');
//   res.json(logs);
// }));
router.post('/logs', handleDbOperation(async (req, res) => {
  const { expression } = req.body;
  if (!expression) {
    logger.info('Received an empty expression');
    return res.status(400).json({ message: 'Expression is empty' });
  }
  let output = null;
  let isValid = true;
  try {
    output = math.evaluate(expression);
    output = parseFloat(output.toFixed(2)); // Format to 2 decimal places
    isValid = true;
  } catch (err) {
    logger.warn(`Invalid expression attempted: ${expression}`);
    isValid = false;
  }
  
  const calculatorLog = new CalculatorLog({ expression, isValid, output });
  const savedLog = await calculatorLog.save();
  logger.info(`Expression logged: ${expression} | Valid: ${isValid}`);

  return res.json({
    id: savedLog.id, // Return the ID in the response
    message: isValid ? `Expression evaluated to ${output}` : 'Invalid expression',
    output: isValid ? output : null,
    isValid
  });
}));

// GET /api/logs - Retrieve logs with pagination
router.get('/logs', handleDbOperation(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const logs = await CalculatorLog.find()
    .sort({ id: 1 }) // Sort by sequential ID
    .skip((page - 1) * limit)
    .limit(parseInt(limit))
    .exec();

  const totalLogs = await CalculatorLog.countDocuments().exec();

  res.json({
    logs,
    totalPages: Math.ceil(totalLogs / limit),
    currentPage: parseInt(page)
  });
}));

// router.get('/logs', handleDbOperation(async (req, res) => {
//   const logs = await CalculatorLog.find().sort({ createdOn: -1 }).limit(10).exec();
//   logger.info('Successfully retrieved logs');
//   res.json(logs.map(log => ({
//     id: log.id, // Include the ID here
//     expression: log.expression,
//     isValid: log.isValid,
//     output: log.output,
//     createdOn: log.createdOn
//   })));
// }));


module.exports = router;

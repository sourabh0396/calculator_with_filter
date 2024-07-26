const mongoose = require('mongoose');

const calculatorLogSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  expression: { type: String, required: true },
  isValid: { type: Boolean, required: true },
  output: { type: Number, required: true },
  createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CalculatorLog', calculatorLogSchema);
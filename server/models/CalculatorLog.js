// const mongoose = require('mongoose');

// const calculatorLogSchema = new mongoose.Schema({
//   id: { type: Number, required: true },
//   expression: { type: String, required: true },
//   isValid: { type: Boolean, required: true },
//   output: { type: Number, required: true },
//   createdOn: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('CalculatorLog', calculatorLogSchema);

const mongoose = require('mongoose');
const calculatorLogSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  expression: { type: String, required: true },
  isValid: { type: Boolean, required: true },
  output: { type: Number, required: true },
  createdOn: { type: Date, default: Date.now }
});

// Middleware to set sequential ID
calculatorLogSchema.pre('save', async function(next) {
  if (this.isNew) {
    const lastLog = await mongoose.model('CalculatorLog').findOne().sort('-id').exec();
    this.id = lastLog ? lastLog.id + 1 : 1;
  }
  next();
});

module.exports = mongoose.model('CalculatorLog', calculatorLogSchema);

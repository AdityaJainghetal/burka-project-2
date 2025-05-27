// models/payment.model.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
  {
  
    amount: {
      type: Number,
      min: 0,
    },
    paymentMode: {
      type: String,
      enum: ['cash', 'cheque', 'online', 'card', 'upi'], // example modes
     
    },
    chequeNumber: {
      type: String,
      
    },
    receivingDate: {
      type: Date,
      default: Date.now,
    },
    remark: {
      type: String,
     
    },
    status: {
      type: String,
      enum: ['Pending', 'Completed', 'Failed'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Payments', paymentSchema);

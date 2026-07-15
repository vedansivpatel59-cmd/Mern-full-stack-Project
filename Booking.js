const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: String, default: 'guest' },
  workerId: { type: String, default: '' },
  workerName: { type: String, default: '' },
  workerSkill: { type: String, default: '' },
  date: { type: String, required: true },
  time: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, default: '' },
  status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
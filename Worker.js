const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, default: '' },
  password: { type: String, default: '' },
  skill: { type: String, required: true },
  city: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  isVerified: { type: Boolean, default: false }
}, { timestamps: true, strict: false });

module.exports = mongoose.model('Worker', workerSchema);
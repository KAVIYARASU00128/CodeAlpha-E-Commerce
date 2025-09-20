const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username required'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true,
  },
  passwordHash: {
    type: String,
    required: [true, 'Password hash required'],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;

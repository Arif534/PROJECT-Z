require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3001,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/userservice',
  JWT_SECRET: process.env.JWT_SECRET,
  ENV: process.env.NODE_ENV || 'development'
};
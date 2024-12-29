const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

class UserService {
  async createUser(userData) {
    try {
      // Hash password
      const salt = await bcrypt.genSalt(10);
      userData.password = await bcrypt.hash(userData.password, salt);

      const user = new User(userData);
      return await user.save();
    } catch (error) {
      throw new Error('Error creating user: ' + error.message);
    }
  }

  async getUserById(userId) {
    try {
      return await User.findById(userId).select('-password');
    } catch (error) {
      throw new Error('User not found');
    }
  }

  async updateUser(userId, updateData) {
    try {
      return await User.findByIdAndUpdate(
        userId, 
        updateData, 
        { new: true, runValidators: true }
      ).select('-password');
    } catch (error) {
      throw new Error('Error updating user: ' + error.message);
    }
  }
}

module.exports = new UserService();
const UserService = require('../services/user.service');

class UserController {
  async createUser(req, res) {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json({
        message: 'User created successfully',
        user: user
      });
    } catch (error) {
      res.status(400).json({
        message: error.message
      });
    }
  }

  async getUser(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(404).json({
        message: error.message
      });
    }
  }
}

module.exports = new UserController();
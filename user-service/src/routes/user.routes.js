const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.getUser);

module.exports = router;
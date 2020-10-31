const express = require('express')
const users = express.Router()
const cors = require('cors')
const userController = require('../controllers/UserController');

users.use(cors())

users.post('/register', userController.register);
users.post('/login', userController.login);
module.exports = users;
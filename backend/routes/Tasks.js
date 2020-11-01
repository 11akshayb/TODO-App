var express = require('express')
var tasks = express.Router()
const cors = require('cors')
const taskController = require('../controllers/tasks.controller.js');

tasks.use(cors())

process.env.SECRET_KEY = 'secret'

tasks.post('/task', taskController.addTask);
tasks.get('/tasks', taskController.getTask);
tasks.delete('/task/:id', taskController.deleteTask);
tasks.put('/task/:id', taskController.updateTask);

module.exports = tasks

const express = require('express');
const router = express.Router();
const tasks = require('../controllers/tasks.controller');
const verifyToken = require('../middleware/auth.middleware');

router.use(verifyToken);
router.get('/', tasks.getTasks);
router.post('/', tasks.createTask);
router.put('/:id', tasks.updateTask);
router.delete('/:id', tasks.deleteTask);

module.exports = router;

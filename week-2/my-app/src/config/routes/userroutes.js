const express = require('express');
const { registerUser, getUser, getAllUsers } = require('../routes/userroutes');
const router = express.Router();

router.post('/users', registerUser);
router.get('/users/:id', getUser);
router.get('/users', getAllUsers);

module.exports = router;

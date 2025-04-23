const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require("../middlerwares/authMiddleware");


router.get('/users', userController.getUsers);

module.exports = router;

const express = require('express');
const router = express.Router();
const adminController = require("../controllers/adminController");
const {verifyToken, checkRoles} = require("../middlerwares/authMiddleware");

router.get("/dashboard",verifyToken,checkRoles("admin"),adminController.dashboard);

module.exports = router;

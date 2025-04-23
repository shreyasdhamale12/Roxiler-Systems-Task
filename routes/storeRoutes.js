const express = require('express');
const router = express.Router();
const storeController = require("../controllers/storeController");  
const {verifyToken} = require("../middlerwares/authMiddleware");
const {ratingValidator} = require("../utils/validators")

router.get('/stores', verifyToken, storeController.getStores);

router.post("/rate", verifyToken, ratingValidator, storeController.submitRating);

//this will create thee store
router.post('/', verifyToken, storeController.createStore);

module.exports = router;
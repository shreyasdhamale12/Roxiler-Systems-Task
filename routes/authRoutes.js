const express = require('express');
const router = express.Router();
const {registerUser, login} = require("../controllers/authController");
const {registerValidator} = require("../utils/validators");
const {validationResult} = require("express-validator");

router.post("/signup", registerValidator, (req,res,next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json(errors.array());
    }
    next();
},registerUser);

router.post("/login",login);

module.exports = router;

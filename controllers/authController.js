const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const userModel = require("../models/userModel");

exports.registerUser = (req, res) => {
    const { name, email, password, address } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ message: "Error hashing password" });
        }

        const user = { name, email, password: hash, address, role: "user" };

        userModel.createuser(user, (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Got error while registering" });
            }


            const token = jwt.sign(
                { id: result.insertId, role: "user" },
                process.env.JWT_SECRET
            );

            res.status(200).json({
                message: "User is registered",
                name: name,
                token: token
            });
        });
    });
};


exports.login = (req, res) => {
    const {email, password} = req.body;

    userModel.findUserByEmail(email, (err, result) => {
        if(err || result.length === 0){
            return res.status(401).json({message: "Error while logging"});
        }

        bcrypt.compare(password, result[0].password, (err, match) => {
            if(!match){
                return res.status(401).json({message:"Password does not match"});
            }

            const token = jwt.sign({
                id: result[0].id, role: result[0].role},
                process.env.JWT_SECRET
            );
            
            res.status(200).json({
                message: "User is logged IN",
                token: token
            });
        });
    });
};

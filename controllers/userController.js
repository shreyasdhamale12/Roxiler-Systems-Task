const userModel = require('../models/userModel');


exports.getUsers = (req, res) => {
    userModel.getAllUsers((err, users) => {
        if (err) {
            return res.status(500).json({ message: "Error while fetching users" });
        }
        return res.status(200).json({ users });
    });
};

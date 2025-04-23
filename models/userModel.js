const db = require("../config/db");

exports.createuser = (user, callback) => {
    const query = "INSERT INTO users SET ?";
    db.query(query,user, callback);
}

exports.findUserByEmail = (email, callback) => {
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query,email,callback);
}

exports.getAllUsers = (callback) => {
    db.query("SELECT * FROM users", callback);
}

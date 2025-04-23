const db = require("../config/db");

exports.submitRating = (user_id, store_id, rating, callback) => {
    const sql = `INSERT INTO ratings(user_id,store_id, rating)
    VALUES(?,?,?)
    ON DUPLICATE KEY UPDATE rating = ?`;
    db.query(sql, [user_id,store_id, rating, rating], callback);
};

exports.getRatings= (store_id, callback) => {
    db.query("SELECT * FROM ratings WHERE store_id = ?", [store_id], callback);
};

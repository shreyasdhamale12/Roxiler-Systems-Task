const db = require("../config/db");

exports.createStore = (store, callback) => {
    db.query("INSERT INTO stores SET ?", store, callback);
}

exports.getAllStores = (callback) =>{
    db.query("SELECT * FROM stores", callback);
}

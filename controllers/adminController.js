const userModel = require("../models/userModel");
const storeModel = require("../models/storeModel");
const util = require('util');
const db = require("../config/db");

const query = util.promisify(db.query).bind(db);

exports.dashboard = async(req,res) => {
    try {

        const users = await query("SELECT COUNT(*) AS total FROM users");
        const stores = await query("SELECT COUNT(*) AS total FROM stores");
        const rating = await query("SELECT COUNT(*) AS total FROM ratings");

        const stats = {
            users: users[0].total,
            stores: stores[0].total,
            ratings: ratings[0].total
        };

        res.json(stats);

    } catch (error) {
        console.error("error fetching stats", error);
        res.status(500).json({error: "Internal Server Error"});
    }

};

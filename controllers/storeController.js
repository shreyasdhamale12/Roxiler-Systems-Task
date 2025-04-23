const storeModel = require("../models/storeModel");
const ratingModel = require("../models/ratingModel");

exports.getStores = (req,res) => {
    storeModel.getAllStores((err,stores) => {
        if(err){
            return res.status(500).json({message:"Error while fetching stores from server"}); 
        }
        res.json(stores);
    })
};

exports.submitRating = (req,res) => {
    const user_id = req.user.id;
    const {store_id, rating} = req.body;

    if (!store_id || !rating || rating < 1 || rating > 5) {
        return res.status(400).json({ message: "Rating must be between 1 and 5." });
    }

    ratingModel.submitRating(user_id,store_id,rating,(err) => {
        if(err){
            return res.status(500).json({message: "Rating failed - Server Error"})
        }
        res.json({message:"Rating Submitted"});
    });
};

exports.createStore = (req, res) => {
    const { name, email, address } = req.body;
    const owner_id = req.user.id;

    if (!name || !email || !address) {
        return res.status(400).json({ message: "Please provide name, email, and address" });
    }

    const newStore = {
        name,
        email,
        address,
        owner_id
    };

    storeModel.createStore(newStore, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Error while creating store", error: err });
        }

        res.status(201).json({
            message: "Store created successfully",
            store_id: result.insertId
        });
    });
};

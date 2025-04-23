const ratingModel = require("../models/ratingModel");
const storesModel = require("../models/storeModel");
const userModel = require("../models/userModel");

exports.rateStore = (req,res) => {
    const {store_id, rating} = req.body;
    const user_id = req.user.id;

    if(!store_id || !rating || rating <1 || rating>5 ){
        return res.status(400).json({message: "Invalid Data. Provide valid store_id/rating between 1 to 5"});
    }

    storesModel.getAllStores((err,stores) => {
        if(err){
            return res.status(500).json({message:"Internal Server Error"});
        }

        const store = stores.find(store => store.id === Number(store_id));
        if(!store){
            return res.status(404).json({message:"Store not found"});
        }

        ratingModel.submitRating(user_id, store_id, rating, (err, result) => {
            if(err){
                return res.status(500).json({message:"Failed during submitting the rating"});
            }

            return res.status(201).json({
                message:"Rating submitted successfully"
            });

        });
    });
};

exports.getStoreRatings = (req,res) => {
    const { store_id } = req.params;

    storesModel.getAllStores((err,stores) => {
        if(err){
            return res.status(500).json({message:"Internal Server Error."})
        }
        const store = stores.find(store => store.id === store_id);
        if(!store){
            return res.status(404).json({message:"Store not found"});
        }

        ratingModel.getRatings(store_id, (err, ratings) => {
            if (err) {
                return res.status(500).json({message:"failed to retrive"});
            }
            return res.status(200).json({
                store_id,
                ratings,
            });
        });
    });
};

exports.getAllUsers = (req,res) => {
    userModel.getUsers((err,users) =>{
        if (err) {
            return res.status(500).json({message:"Failed during retrieving users"});
        }

        return res.status(200).json({
            users
        });
    });
};

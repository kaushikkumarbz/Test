const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    space:String,
    name:String
});

module.exports = mongoose.model("listingsAndReviews", userSchema);
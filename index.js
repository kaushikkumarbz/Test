const mongoose = require('mongoose');
const User = require('./model/User');
const listingsAndReviews = require('./model/listingsAndReviews')
const dbURI = "mongodb+srv://Reddy:1234@cluster0.56tv7.mongodb.net/sample_airbnb?retryWrites=true&w=majority"

mongoose
    .connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));

setTimeout(async () => {

    let data = await User.find(
    );
   
    console.log(data);
    
}, 5000);
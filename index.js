const mongoose = require('mongoose');
const User = require('./model/User');
const listingsAndReviews = require('./model/listingsAndReviews')
const dbURI = "xyz"

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



// https://github.com/kaushikkumarbz/Test
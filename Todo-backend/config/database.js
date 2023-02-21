

const MONGODB_URI = process.env.MONGODB_URI;

const mongoose = require('mongoose');


exports.connect = () => {
    mongoose.connect(MONGODB_URI, {useNewUrlParser:true,useUnifiedTopology: true })
    .then(console.log("Database connected"))
    .catch((error) => {
        console.log("database connection failed")
        console.log(error)
        process.exit(1)
    })
}
const mongoose = require('mongoose')

function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MongoDb connected");
    }).catch((err)=>{
        console.log("MongoDB connnection error:", err);
    })
}

module.exports = connectDB
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName:{
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String
        }
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    phoneNo:{
        type: String,
        required: true
    },
    password:{
        type:String,
        require: true
    }
},{timestamps:true})


const userModel = mongoose.model("user", userSchema)

module.exports = userModel
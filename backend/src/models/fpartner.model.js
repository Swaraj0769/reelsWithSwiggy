const mongoose = require('mongoose')


const foodPartnerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    ownerName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required : true
    },
    phoneNo:{
        type: Number,
        required: true,
    },
    cuisine:{
        type: String,
    },
    password:{
        type:String,
        required: true
    }
})

const foodPartnerModel = mongoose.model("fpartner", foodPartnerSchema)

module.exports = foodPartnerModel;
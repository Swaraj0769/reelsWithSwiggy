const mongoose = require('mongoose')


const foodPartnerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    contactName:{
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
    phone:{
        type: Number,
        required: true,
    },
    password:{
        type:String,
        required: true
    }
})

const foodPartnerModel = mongoose.model("fpartner", foodPartnerSchema)

module.exports = foodPartnerModel;
const mongoose = require('mongoose')
const foodPartnerModel = require('./fpartner.model')

const foodSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    video:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    price:{
        type: Number,
        required: true
    },
    foodPartner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "fpartner"
    }
})

const foodModel = mongoose.model('food', foodSchema)

module.exports = foodModel
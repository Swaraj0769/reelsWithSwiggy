const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    food:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'food'
    }
},{
    timestamps: true
})

const likeModel = mongoose.model('like', likeSchema)

module.exports = likeModel
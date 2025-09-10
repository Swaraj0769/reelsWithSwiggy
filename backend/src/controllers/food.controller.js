const foodModel = require('../models/food.model')
const likeModel = require('../models/likes.model')
const storageService =require('../services/storage.service')
const { v4:uuid } = require('uuid')

async function createFood(req, res) {
    // console.log(req.foodPartner);
    // console.log(req.body);
    // console.log(req.file);

    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid())
    // console.log(fileUploadResult);
    
    const foodItem = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id
    })

    
    res.status(201).json({
        message: "food Item created successfully",
        food: foodItem
    })
}

async function getFoodItems(req, res) {
    const foodItems = await foodModel.find({})

    res.status(200).json({
        message: "Food items feteched successfully",
        foodItems
    })
}

async function likeFood(req, res) {
    const { foodID } = req.body;

    const user = req.user;

    const isAlreadyLike =   await likeModel.findOne({
        user: user._id,
        food: foodID
    })

    if(isAlreadyLike){
        await likeModel.deleteOne({
            user: user._id,
            food: foodID
        })

        await foodModel.findByIdAndUpdate(foodID, {
            $inc: {likeCount: -1}
        })
        return res.status(200).json({
            message:"Food unlike successfully"
        })
    }

    const like = await likeModel.create({
        user: user._id,
        food: foodID
    })

    await foodModel.findByIdAndUpdate(foodID,{
        $inc: {likeCount: 1}
    })

    res.status(201).json({
        message: 'food liked successfully',
        like
    })
}

async function saveFood(req, res) {
    const { foodId } = req.body;
    const user = req.user;

    const isAlreadySaved = await saveModel.findOne({
        user: user._id,
        food: foodId
    })

    if (isAlreadySaved) {
        await saveModel.deleteOne({
            user: user._id,
            food: foodId
        })

        await foodModel.findByIdAndUpdate(foodId, {
            $inc: { savesCount: -1 }
        })

        return res.status(200).json({
            message: "Food unsaved successfully"
        })
    }

    const save = await saveModel.create({
        user: user._id,
        food: foodId
    })

    await foodModel.findByIdAndUpdate(foodId, {
        $inc: { savesCount: 1 }
    })

    res.status(201).json({
        message: "Food saved successfully",
        save
    })
}

module.exports = {
    createFood,
    getFoodItems,
    likeFood,
    saveFood
}
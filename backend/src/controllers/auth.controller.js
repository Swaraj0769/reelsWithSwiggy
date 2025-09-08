const userModel = require('../models/user.model')
const foodPartnerModel = require('../models/fpartner.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
    const {fullName, email, password , phoneNo  } = req.body;

    const isUserAlreadyExist = await userModel.findOne({
        email
    })

    if(isUserAlreadyExist){
        return res.status(400).json({
            message:"User already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        fullName, 
        email,
        password: hashedPassword,
        phoneNo,
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(201).json({
        message:"User register successfully",
        user:{
            _id: user._id,
            email: user.email,
            fullName: user.fullName,
            phoneNo: user.phoneNo
        }
    })
}

async function loginUser(req, res) {
    const {email, password} = req.body;

    const user = await userModel.findOne({
        email
    })

    if(!user){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return res.status(400).json({
            message: "Invalid email or password-"
        })
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message: "User Login successfully",
        user:{
            id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })
}

function logoutUser(req, res) {
    res.clearCookie('token');
    res.status(200).json({
        message: "User Logged out Successfully"
    })
}

async function registerFPartner(params) {
    const {name, email, password, phoneNo, address, cuisine, ownerName} = req.body;

    const isAccountAlreadyExist = await foodPartnerModel.findOne({
        email
    })

    if(isAccountAlreadyExist){
        return res.status(400).json({
            message: "This Food Partner Account already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const foodPartner = await foodPartnerModel.create({
            name,
            email,
            password: hashedPassword,
            phoneNo,
            address,
            cuisine,
            ownerName
    })

    const token = jwt.sign({
        id: foodPartner._id,
    },process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(201).json({
        message: "Food Partner registered successfully",
        foodPartner:{
            _id: foodPartner._id,
            name: foodPartner.name,
            email: foodPartner.email,
            phoneNo: foodPartner.phoneNo,
            address: foodPartner.address,
            cuisine : foodPartner.cuisine,
            ownerName: foodPartner.ownerName
        }
    })
}

async function loginFPartner(req, res) {
    const {email, password} = req.body;

    const foodPartner = await foodPartnerModel.findOne({
        email
    })

    if(!foodPartner){
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, foodPartner.password)

    if(!isPasswordValid){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }

    const token = jwt.sign({
        id: foodPartner._id
    }, process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(200).json({
        message: "Food Partner Login successfully",
        foodPartner:{
            _id: foodPartner._id,
            name: foodPartner.name,
            email: foodPartner.email
        }
    })
    
    
}

function logoutFPartner(req, res){
    res.clearCookie('token');
    res.status(200).json({
        message: "Food Partner Logged out Successfully"
    })
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser, 
    registerFPartner,
    loginFPartner,
    logoutFPartner
}
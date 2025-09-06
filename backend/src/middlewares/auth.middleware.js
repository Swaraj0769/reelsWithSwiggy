const foodPartnerModel = require('../models/fpartner.model')
const jwt = require('jsonwebtoken');
const { use } = require('../routes/food.routes');


async function authFoodPartnerMiddleware(req, res, next) {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "Please login to continue"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const foodPartner = await foodPartnerModel.findById(decoded.id)

        req.foodPartner = foodPartner;
        
        next()
    } catch (err) {
        return res.status(401).json({
            message:" Invalid Token"
        })
    }
}

async function authUserMiddleware(req, res, next) {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "Please Login First"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.id)

        req.user = user

        next()
    } catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
}

module.exports = {
    authFoodPartnerMiddleware,
    authUserMiddleware
}
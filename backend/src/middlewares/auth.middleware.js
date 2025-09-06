const foodPartnerModel = require('../models/fpartner.model')
const jwt = require('jsonwebtoken');


async function authFoodPartnerMiddleware(req, res, next) {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "Please login to continue"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JSON_WEB_TOKEN);
        const foodPartner = await foodPartnerModel.findById(decoded.id)

        req.foodPartner = foodPartner;
        
        next()
    } catch (err ) {
        return res.status(401).json({
            message:" Invalid Token"
        })
    }
}



module.exports = {
    authFoodPartnerMiddleware,
    
}
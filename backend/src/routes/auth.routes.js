const express = require('express')
const authController = require("../controllers/auth.controller")

const router = express.Router()

//user auth routes(Api)
router.post('/user/register', authController.registerUser)
router.post('/user/login', authController.loginUser)
router.get('/user/logout', authController.logoutUser)

// food partner auth routes(APIs)
router.post('fpartner/register', authController.registerFoodPartner)
router.post('fpartner/login', authController.loginFoodPartner)
router.get('fpartner/logout', authController.logoutFoodPartner)

module.exports = router;
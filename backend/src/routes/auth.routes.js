const express = require('express')
const authController = require("../controllers/auth.controller")

const router = express.Router()

//user auth routes(Api)
router.post('/user/register', authController.registerUser)
router.post('/user/login', authController.loginUser)
router.get('/user/logout', authController.logoutUser)

// food partner auth routes(APIs)
router.post('fpartner/register', authController.registerFPartner)
router.post('fpartner/login', authController.loginFPartner)
router.get('fpartner/logout', authController.logoutFPartner)

module.exports = router;
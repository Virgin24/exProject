const express = require("express");
const authroutes = express.Router()
const Auth = require('../controllers/AuthController')

authroutes.post('/login',Auth.Login)

authroutes.post('/register',Auth.Register)




module.exports = authroutes
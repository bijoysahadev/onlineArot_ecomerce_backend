const express =require("express")
const LoginController = require("../../../Controllers/LoginController")
const ForgetPasswordController = require("../../../Controllers/ForgetPasswordController")
const router=express.Router()






router.post("/forgetpassword",ForgetPasswordController)
module.exports=router
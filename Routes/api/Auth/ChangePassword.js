const express =require("express")
const LoginController = require("../../../Controllers/LoginController")

const ChangePasswordController = require("../../../Controllers/ChangePasswordController")
const router=express.Router()






router.post("/changepassword",ChangePasswordController)
module.exports=router
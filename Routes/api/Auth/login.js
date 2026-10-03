const express =require("express")
const LoginController = require("../../../Controllers/LoginController")
const router=express.Router()






router.post("/login",LoginController)
module.exports=router
const express =require("express")
const router=express.Router()
const OtpController = require("../../../Controllers/OtpController");




router.post("/Otp",OtpController)
module.exports=router
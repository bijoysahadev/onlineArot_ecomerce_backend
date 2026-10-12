const express =require("express")
const router=express.Router()
const Otp=require("./Auth/Otp")
const regestration=require("./Auth/regestration")
const login =require("./Auth/login")

router.use("/authentication",regestration)
router.use("/authentication",login)
router.use("/authentication",Otp)
module.exports=router
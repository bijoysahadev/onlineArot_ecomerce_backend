const express =require("express")
const router=express.Router()

const regestration=require("./Auth/regestration")
const login =require("./Auth/login")

router.use("/authentication",regestration)
router.use("/authentication",login)
module.exports=router
const express =require("express")
const router=express.Router()
const regestration=require("./Auth/regestration")
router.use("/authentication",regestration)
module.exports=router
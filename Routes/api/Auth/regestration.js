const express =require("express")
const router=express.Router()
const regestrationController = require("../../../Controllers/regestrationController")




router.post("/regestration",regestrationController)
module.exports=router
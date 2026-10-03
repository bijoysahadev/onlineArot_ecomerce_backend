const express =require("express")
const router=express.Router()
const regestrationController = require("../../../Controllers/regestrationController")
const secureApi = require("../../../Middleware/secureApi")




router.post("/regestration",secureApi,regestrationController)
module.exports=router
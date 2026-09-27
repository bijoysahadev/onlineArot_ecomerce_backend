const express=require("express")
const router =express.Router()
const Authentication =require('./api/index')
router.use("/api/v1",Authentication)



module.exports=router
const express=require("express")
const router =express.Router()
const Authentication =require('./api/index')

router.use(`${process.env.API_URL}`,Authentication)



module.exports=router
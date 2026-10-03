const secureApi =(req,res,next)=> {

if (req.headers.authorization=="12345678"){
    next()
}
else {
    res.send({error:"Autnetication Failed"})
}
}
module.exports=secureApi

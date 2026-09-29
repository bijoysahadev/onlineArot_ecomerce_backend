const emailRegex = require("../utilies/emailRegex")
const passewordRegex = require("../utilies/passwordRegex")


// this is post method
const regestrationController =(req,res)=> {
    
  let {userName,email,password}=req.body

if(!userName){
    res.send("Please Enter Your UserName")
}
else if (!email){
    res.send("please eneter your email")
}
else if (!emailRegex(email)){

    res.send("Please Enter a Valid Email")
}
else if (!password){
    res.send("please enter your passeword")
}

else {
    console.log(req.body);
    
}
}
module.exports=regestrationController
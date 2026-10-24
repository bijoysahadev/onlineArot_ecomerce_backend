const { Schema } = require("mongoose");
const userSchema = require("../Models/userSchema")
var jwt = require('jsonwebtoken');


// this is post method
const OtpController = async (req, res) => {

    let { otp,email } = req.body
    var decoded = jwt.verify(email, 'bijoy');
console.log(decoded.email) // bar
let existingdata =await userSchema.find({email:decoded.email})
    console.log(existingdata[0]);
     

if(existingdata.length>0){
 if(!existingdata[0].emailVerification){
  
      if (existingdata[0].otp==otp) {
        await userSchema.findOneAndUpdate({email:decoded.email},{
            otp:"",
        })
        await userSchema.findOneAndUpdate({email:decoded.email},{
            emailVerification:true,
        })
      
    res.send({success:"OTP match"})
}
else {
    res.send({error:"OTP not match"})
}
 }
 else {
     res.send({error:"Time expired"})
 }
}
else {
    res.send({error:"Invalid Cradentials"})
}
};

module.exports = OtpController


//



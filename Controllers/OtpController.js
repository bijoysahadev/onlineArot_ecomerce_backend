const { Schema } = require("mongoose");
const userSchema = require("../Models/userSchema")



// this is post method
const OtpController = async (req, res) => {

    let { otp,email } = req.body
let existingdata =await userSchema.find({email:email})
    console.log(existingdata[0]);
     

if(existingdata.length>0){
 if(!existingdata[0].emailVerification){
  
      if (existingdata[0].otp==otp) {
        await userSchema.findOneAndUpdate({email:email},{
            otp:"",
        })
        await userSchema.findOneAndUpdate({email:email},{
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



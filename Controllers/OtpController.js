const { Schema } = require("mongoose");
const userSchema = require("../Models/userSchema")



// this is post method
const OtpController = async (req, res) => {

    let { otp,email } = req.body
let existingdata =await userSchema.find({email:email})
     
console.log(existingdata[0].otp);
if(existingdata.length>0){
    if (existingdata[0].otp==otp) {
    res.send("OTP peo gache")
}
else {
    res.send("OTP PAI NAi")
}
}
else {
    res.send("please create an account")
}
};

module.exports = OtpController


//



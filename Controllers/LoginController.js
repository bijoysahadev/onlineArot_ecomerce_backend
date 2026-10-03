const userSchema = require("../Models/userSchema")
const emailRegex = require("../utilies/emailRegex")
const passewordRegex = require("../utilies/passwordRegex")
const bcrypt = require('bcrypt');

// this is post method
const LoginController = async (req, res) => {

    let {  email, password } = req.body

    if (!email) {
        res.send("please eneter your email")
    }
    else if (!emailRegex(email)) {

        res.send("Please Enter a Valid Email")
    }
    else if (!password) {
        res.send("please enter your passeword")
    }

    else {
    // console.log(email);
    // console.log(password);
   let existingData = await  userSchema.find({ email: email})
     console.log(existingData);
     if(existingData.length>0){

bcrypt.compare(password,existingData[0].password,function(err, result) {
  if(err){
        res.send({error:"Invalid Credentials"})
  }
  else {
    if(result){
       res.send({success:"Login Succesfull"});
        
    }
    else {
         res.send({error:"Invalid Credentials"})
    }
    console.log(result);
    
  }
});





        // console.log("login Succesfully");
        // console.log(existingData[0].password );
             }
     else {
   res.send({error:"User not Found"})
     
        
     }
    }
}
module.exports = LoginController


//


// pass GeSnnulI086ZTLDv
// user arot
// uri mongodb+srv://arot:<db_password>@cluster0.vlxcwao.mongodb.net/?appName=Cluster0
// 
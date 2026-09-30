const userSchema = require("../Models/userSchema")
const emailRegex = require("../utilies/emailRegex")
const passewordRegex = require("../utilies/passwordRegex")


// this is post method
const regestrationController = async (req,res)=> {
    
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
    
    let existingUser = await userSchema.find({email:email})
   console.log(existingUser);
   if (existingUser.length>0){
    console.log("age thike data ase");
    res.send("Age thike data Ase")
    
   }
   else {
console.log(req.body);
     const data = new userSchema({
        userName,
        password,
        email,
    })
    data.save()
    res.send(req.body)



   }
}
}
module.exports=regestrationController


// 


// pass GeSnnulI086ZTLDv
// user arot
// uri mongodb+srv://arot:<db_password>@cluster0.vlxcwao.mongodb.net/?appName=Cluster0
// 
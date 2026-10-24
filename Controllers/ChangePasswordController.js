const userSchema = require("../Models/userSchema")
const ChangePasswordController= async (req,res)=> {

let {newpassword,email}=req.body
console.log(newpassword);
console.log(email);
let findemailandupdatepassword=await userSchema.findOneAndUpdate({email:email},{password:newpassword})
res.send({sucess:"password change succesfull"})
}
module.exports=ChangePasswordController
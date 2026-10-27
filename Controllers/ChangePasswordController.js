const userSchema = require("../Models/userSchema")
const ChangePasswordController= async (req,res)=> {
const bcrypt = require('bcrypt');
let {newpassword,email}=req.body


bcrypt.hash(newpassword, 10, async function(err, hash) {


    let findemailandupdatepassword=await userSchema.findOneAndUpdate({email:email},{password:hash})
res.send({sucess:"password change succesfull"})
    // Store hash in your password DB.
});
console.log(newpassword);
console.log(email);

}
module.exports=ChangePasswordController
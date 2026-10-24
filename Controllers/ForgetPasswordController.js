const userSchema = require("../Models/userSchema")
const ForgetPasswordController= async (req,res)=> {
    let {findemail}=req.body
  let singleuser= await userSchema.find({email:findemail})
//   res.send(alluser)
if(singleuser.length > 0) {
 res.send({success:"Found Your Email",
    email:singleuser[0].email
 })
}
else {
res.send({error:"YOur Account not found!"})
}
console.log(singleuser);

}
module.exports=ForgetPasswordController;
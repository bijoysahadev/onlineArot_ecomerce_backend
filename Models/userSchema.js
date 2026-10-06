const mongoose = require('mongoose');
const { Schema }= mongoose
const userSchema=new Schema({
userName : {
    type :String,
    require: true,
},
password : {
    type : String,
    require:true,
},
email : {
    type : String,
    require: true
},
otp : {
    type:Number,

}
})
module.exports=mongoose.model("UserList",userSchema)
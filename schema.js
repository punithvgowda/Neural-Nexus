const   mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    email:String,
    age:Number,
    password:String
})
 
const student=mongoose.model("student",userSchema);
module.exports=student;

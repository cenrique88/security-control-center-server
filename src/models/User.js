const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    phone:String,
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role"
    },
    active:{
        type:Boolean,
        default:true
    }
},{timestamps:true});

module.exports=mongoose.model("User",userSchema);

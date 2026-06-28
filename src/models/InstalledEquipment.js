const mongoose=require("mongoose");

const installedSchema=new mongoose.Schema({

    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Client"
    },

    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job"
    },

    category:String,

    brand:String,

    model:String,

    serial:String,

    ip:String,

    username:String,

    password:String,

    warranty:Date,

    location:String,

    observations:String

},{timestamps:true});

module.exports=mongoose.model("InstalledEquipment",installedSchema);

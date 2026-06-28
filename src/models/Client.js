const mongoose=require("mongoose");

const clientSchema=new mongoose.Schema({

    type:{
        type:String,
        enum:["PERSONA","EMPRESA"],
        default:"PERSONA"
    },

    name:String,

    company:String,

    rut:String,

    phone:String,

    whatsapp:String,

    email:String,

    status:{
        type:String,
        enum:["NUEVO","ACTIVO","PENDIENTE","INACTIVO"],
        default:"NUEVO"
    },

    source:{
        type:String,
        enum:["WEB","WHATSAPP","GMAIL","REFERIDO","MANUAL"],
        default:"MANUAL"
    },

    tags:[String],

    notes:String

},{timestamps:true});

module.exports=mongoose.model("Client",clientSchema);

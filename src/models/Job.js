const mongoose=require("mongoose");

const jobSchema=new mongoose.Schema({

    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Client"
    },

    title:String,

    service:String,

    priority:{
        type:String,
        enum:["BAJA","MEDIA","ALTA","URGENTE"],
        default:"MEDIA"
    },

    status:{
        type:String,
        enum:[
            "PENDIENTE",
            "AGENDADO",
            "EN_PROCESO",
            "FINALIZADO",
            "CANCELADO"
        ],
        default:"PENDIENTE"
    },

    technicians:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],

    startDate:Date,

    endDate:Date,

    observations:String

},{timestamps:true});

module.exports=mongoose.model("Job",jobSchema);

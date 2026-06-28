const mongoose=require("mongoose");

const quoteSchema=new mongoose.Schema({

    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Client"
    },

    number:String,

    status:{
        type:String,
        enum:[
            "BORRADOR",
            "ENVIADO",
            "APROBADO",
            "RECHAZADO"
        ],
        default:"BORRADOR"
    },

    items:[{

        description:String,

        quantity:Number,

        unitPrice:Number,

        total:Number

    }],

    laborPoints:Number,

    laborPrice:Number,

    subtotal:Number,

    iva:Number,

    total:Number,

    pdf:String

},{timestamps:true});

module.exports=mongoose.model("Quote",quoteSchema);

const mongoose=require("mongoose");

const inventorySchema=new mongoose.Schema({

    category:String,

    brand:String,

    model:String,

    serial:String,

    stock:Number,

    minimum:Number,

    purchasePrice:Number,

    salePrice:Number,

    supplier:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Supplier"
    }

},{timestamps:true});

module.exports=mongoose.model("InventoryItem",inventorySchema);

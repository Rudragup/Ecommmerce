const mongoose = require('mongoose');

const Schema=mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    image:{
        type:String,
    },
    price:{
        type:Number,
        min:0
    },
    quantity:{
        type:Number,
        min:0
    },
    description:{
        type:String,
    },
    isbestSeller:{
        type:Boolean,
    },
    category:{
        type:String
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserDetail'
    }
},{timestamp:true})

const product =mongoose.model('Product',Schema);

module.exports=product;
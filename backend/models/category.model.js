const mongoose = require('mongoose');

const Schema=mongoose.Schema({
name:{
    type:String,
    unique:true
},
image:{
    type:String,
},

description:{
type:String
},
isbestSeller:{
    type:Boolean
},
userid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'UserDetail',
    default:null
}

},{timestamp:true});
const category=mongoose.model('Category',Schema);

module.exports=category;
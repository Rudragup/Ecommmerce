const mongoose = require('mongoose');

const Schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }


},{timestamp:true});

const user =mongoose.model('UserDetail',Schema);
module.exports =user;
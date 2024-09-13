const mongoose = require('mongoose');

// Connect to MongoDB

mongoose.connect('mongodb+srv://rudragupta077:rudra%40123@cluster0.c8stoyu.mongodb.net/eccomerce')
.then(()=>
  console.log('Connected to MongoDB'))
 .catch((err)=> console.log(err));

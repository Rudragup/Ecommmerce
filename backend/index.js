const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path=require('path');
const app=express();
const userRouter=require('./router/user.route');
const productRouter=require('./router/product.route');
require('./db')


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./public')));
app.use(express.json());
app.use('/',userRouter);
app.use('/',productRouter);

app.listen(8080,()=>{
    console.log('Server started at port 8080');
})
const router = require('express').Router();
const userRouter=require('./user.route');
const productRouter=require('./product.route');

app.use('/',userRouter);
app.use('/',productRouter);

module.exports = router;

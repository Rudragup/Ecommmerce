const router = require('express').Router();
const {category,Products,total,bestseller_category,bestseller_product} = require('../controler/product.controller')
const upload =require('../middleware/image.valadion');
router.post('/category',upload.single('file'),category);
router.post('/product',upload.single('file'),Products);
router.post('/total',total);
router.post('/bestseller_category',bestseller_category);
router.post('/bestseller_product',bestseller_product);
module.exports = router;
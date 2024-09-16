const router = require('express').Router();
const {category,Products,total,bestseller_category,bestseller_product,all_products,edit_category,edit_product,changeProduct,changeCategory,category_products,oneProduct} = require('../controler/product.controller')
const upload =require('../middleware/image.valadion');


router.post('/category',upload.single('file'),category);
router.post('/product',upload.single('file'),Products);
router.post('/total',total);
router.post('/bestseller_category',bestseller_category);
router.post('/bestseller_product',bestseller_product);
router.post('/all_products',all_products);
router.post('/editCategory',edit_category);
router.post('/editProduct',edit_product);
router.post('/changeProduct',upload.single('file'),changeProduct);
router.post('/changeCategory',upload.single('file'),changeCategory);
router.post('/oneproduct',oneProduct);
router.post('/category_products',category_products);
module.exports = router;
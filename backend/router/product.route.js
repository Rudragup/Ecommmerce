const router = require('express').Router();
const {category,Products,all_category,Category_details,bestseller_category,bestseller_product,all_products,edit_category,edit_product,changeProduct,changeCategory,category_products,oneProduct} = require('../controler/product.controller')
const upload =require('../middleware/image.valadion');


router.post('/category',upload.single('file'),category);
router.post('/product',upload.single('file'),Products);


router.get('/all_category',all_category);
router.get('/all_products',all_products);
router.get('/Category_details',Category_details);


router.get('/bestseller_category',bestseller_category);
router.get('/bestseller_product',bestseller_product);


router.get('/editCategory',edit_category);
router.get('/editProduct',edit_product);


router.patch('/changeProduct',upload.single('file'),changeProduct);
router.patch('/changeCategory',upload.single('file'),changeCategory);


router.get('/oneproduct',oneProduct);
router.get('/category_products',category_products);


module.exports = router;
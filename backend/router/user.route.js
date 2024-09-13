const router = require('express').Router();
const {signup,login}=require('../controler/user.controller')
const {signupValidation,loginValidation}=require('../middleware/userValdition');

router.post('/signup',signupValidation,signup);
router.post('/login',loginValidation,login);

module.exports = router;
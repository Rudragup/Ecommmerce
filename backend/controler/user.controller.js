
const user =require('../models/user.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const signup=async(req,res) => {
try{
const {name,email,password}=req.body;
console.log(name,email,password);
const check = await user.find({"email":email});
if(!check){
    return res.status(200).json({message:"Email already exists",success:false});
}


const model= new user({name,email,password});
model.password=await bcrypt.hash(password,10) ;
await model.save({name,email,password});

res.status(200).json({message:"User registered successfully",success:true});
}
catch(err){
    console.log(err);
    res.status(200).json({message:"email aleready exist",success:false});
}
}

const login=async(req,res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        const User = await user.findOne({ email });
        const errorMsg = 'Auth failed email or password is wrong';
        if (!User) {
            return res.status(200)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, User.password);
        if (!isPassEqual) {
            return res.status(200)
                .json({ message: "wrong Password", success: false });
        }
      
        const jwtToken = jwt.sign(
            { email: User.email, _id: User._id },
            "Secert-123",
            { expiresIn: '24h' },
                  )
    console.log(jwtToken)
       return res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                email,
                name: User.name,
                
            })
    }
    catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

module.exports={signup,login};
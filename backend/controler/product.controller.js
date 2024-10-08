const cate = require("../models/category.model");
const product = require("../models/Product.model");
const products = require("../models/Product.model");
const category = async (req,res) => {
  try{
    // addding category
    const filePath = req.file.path;

    // Find the position of the last backslash
    const lastBackslashIndex = filePath.lastIndexOf('\\');

    // Slice the string to get everything after the last backslash
    const fileName = filePath.substring(lastBackslashIndex + 1);



    const image=fileName;
const {name,description,isbestSeller,userId}=req.body;
console.log(name,image,description,isbestSeller, userId);
const user= new cate({name,image,description,isbestSeller,userid:userId});

    await user.save();

    res.status(201).json(user);
  }
  catch(error){
    console.error(error);
    res.status(500).json({message: "Server Error"})
  }
}

const Products =async (req,res) => {
  console.log("hiii ");
try{
    const filePath = req.file.path;

    // Find the position of the last backslash
    const lastBackslashIndex = filePath.lastIndexOf('\\');

    // Slice the string to get everything after the last backslash
    const fileName = filePath.substring(lastBackslashIndex + 1);




      const image=fileName;

const {name,price,quantity,description,isbestSeller,category,userId}=req.body;




const check=  await products.find({name});

if(check.length>0){
  return res.status(400).json({message: "Product already exist"})
    }

const cat=await cate.find({"name":category});
    console.log(cat)
const categoryId=cat[0]._id;


const user= new products({name,image,price,quantity,description,isbestSeller,category,categoryId,userId});
    await user.save();
  }
catch(error){
    console.error(error);
  res.status(500).json({message: "Server Error"})
  }
}


const all_category =async (req, res)=>{
  try{
    // add pagination
    const page =req.query.page;
    const limit = parseInt(req.query.limit) || 5;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await cate.countDocuments();
    const products = await cate.find().skip(startIndex).limit(limit);
    res.json({
      products,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });
  }
  catch(error){
    console.error(error);
    res.status(500).json({message: "Server Error"})
  }
}

const bestseller_category= async (req,res)=>{
  try{
    const data=await cate.find({"isbestSeller" :{ $eq :true}});
    res.send(data);
  }
  catch(error){
    console.error(error);
    res.status(500).json({message: "Server Error"})
  }
}
const bestseller_product= async (req,res)=>{
  try{
    const data=await products.find({"isbestSeller" :{ $eq :true}});
    res.send(data);
  }
      catch(error){
    console.error(error);
        res.status(500).json({message: "Server Error"})
  }
}

const all_products=async (req,res)=>{
  try{
    // pagination 
    const page =req.query.page || 1;
    const limit = parseInt(req.query.limit) || 5;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await product.countDocuments();
    const data = await product.find().skip(startIndex).limit(limit);
    res.json({
      data,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });
  }
      catch(error){
    console.error(error);
        res.status(500).json({message: "Server Error"})
  }
}

const edit_category=async (req,res)=>{
try{
    console.log(req.body);
  const id=req.query.id;
  const check=await cate.findById({"_id":id});
    res.status(200).send(check);
  }
  catch(error){
    console.error(error);
    res.status(500).json({message: "Server Error"})
  }
}
const edit_product=async (req,res)=>{
  try{
    const id=req.query.id;
    const check=await product.findById({"_id":id});
    res.send(check);
  }
    catch(error){
    console.error(error);
      res.status(500).json({message: "Server Error"})
  }
}



const changeCategory=async (req,res)=>{
  console.log(req.body);
  let imagename="";
  try{
    if(req.file)
      {

      const filePath = req.file.path;

      // Find the position of the last backslash
      const lastBackslashIndex = filePath.lastIndexOf('\\');

      // Slice the string to get everything after the last backslash
      const fileName = filePath.substring(lastBackslashIndex + 1);



        imagename=fileName;

    }
      else{
        imagename=req.body.image;
    }
    const {_id,name,description,isbestSeller}=req.body;
    console.log(req.body)
    const check=await cate.findByIdAndUpdate({_id},{name,imagename,description,isbestSeller});
    res.send(check);
  }
  catch(error){
    console.error(error);
    res.status(500).json({ message: "Server Error" })
  }
}

const changeProduct = async (req, res) => {
  console.log(req.body);
  let imagename = "";
  try {
    if (req.file) {

      const filePath = req.file.path;

      // Find the position of the last backslash
      const lastBackslashIndex = filePath.lastIndexOf('\\');

      // Slice the string to get everything after the last backslash
      const fileName = filePath.substring(lastBackslashIndex + 1);



      imagename = fileName;

    }
    else {
      imagename = req.body.image;
    }
    const { id, name, price, quantity, description, isbestSeller, category } = req.body;
    const check = await products.findByIdAndUpdate({ "_id": id }, { name, price, imagename, quantity, description, isbestSeller, category });
    res.send(check);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" })
  }
}





const category_products = async (req, res) => {
  try {
    const id=req.query.id;
    const data = await product.find({ categoryId: id });
    res.send(data);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" })
  }
}

const oneProduct = async (req, res) => {
  try {
    const id = req.query.id;
    const data = await products.findById({ _id: id });
    res.send(data);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" })
  }
}

const Category_details = async (req, res) => {
  const data = await cate.find({});
  res.send(data);
}



module.exports = { category, Products, all_category, bestseller_category, bestseller_product, all_products, edit_category, edit_product, changeCategory, changeProduct, category_products, oneProduct, Category_details }
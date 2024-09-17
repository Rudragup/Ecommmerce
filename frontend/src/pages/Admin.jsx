
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './Header';
import { Link,useLocation } from 'react-router-dom';
import './admin.css'

function Admin() {
const [category,setCategory]=useState([]);
const userid=localStorage.getItem("loggedInId");
console.log(userid)

const[page,setpage]=useState(1);
const[totalPages,settotalPages]=useState();

useEffect(()=>{
  const list = async ()=>{
    const res=await axios.post('http://localhost:8080/total',{page:page});
   console.log(res.data);
    setCategory(res.data.products);
    settotalPages(res.data.totalPages);
  }
  list();
},[page,setpage])

const previous = ()=>{
  if(page>1){
    setpage(page-1);
  }
}

const Next = ()=>{
  if(page<totalPages){
    setpage(page+1);
  }
}
const [products, setproducts]=useState([]);
const [p, setp]=useState(1);
const [tp, settp]=useState(2);
useEffect(()=>{
const list = async ()=>{
const res=await axios.post('http://localhost:8080/all_products',{page:p});
  setproducts(res.data.data);
  settp(res.data.totalPages);
  console.log(res.data);
}
list();
},[p,setp])

const prev = ()=>{
  if(p>1){
    setp(p-1);
  }
}
const nex=()=>{
  if(p<tp){
    setp(p+1);
  }
}
const [data,setdata] =useState([]);
const [admin,setisAdmin] =useState(false);
useEffect(()=>{
  const list= async ()=>{
    const res=await axios.post('http://localhost:8080/checkAdmin',{"_id":userid});
    console.log(userid);
   console.log(res.data)
    setdata(res.data);
    console.log(res.data.isAdmin);
    setisAdmin(res.data.isAdmin);
  }
  list();
},[])
  return (
<>
<Header />
{
  admin?
<div>
<div className='upper'>
<h1  style={{
fontSize:'40px'
}}>Admin panel</h1>
<button className="w-17 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">       
<Link to="/Add_product" className="hover:text-yellow-300">Add Product</Link></button>
<button className="w-17 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">   <Link to="/Add" className="hover:text-yellow-300">Add category</Link></button>
</div>
<div className='middle'>
<h1 style={{
fontSize:'30px'
}}>All category</h1>
  <div className="bor" style={{display:'flex'}}>
  {
    category.map((item)=>(
// console.log(item)
  <div key={item._id} className='inside'>
      <img  src={`http://localhost:8080/images/${item.image}`} style={{height:'100px',width:'230px'}} alt='helo' />
      
    <h2>Name:  {item.name}</h2>
    <p>Description:  {item.description}</p>
 <div style={{marginTop:'21px'}}>  
<Link to="/category_product" state={{id:item._id}} className=" w-14 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">
Product
  
  </Link> 
   <Link to="/editCategory" state={{id:item._id}} className=" w-14 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">
      Edit</Link>
</div>  

    </div>
      
    ))
  }
  </div>
 <div className='w-100 flex justify-center items-center'> 
  <button onClick={previous}   className=' w-17 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400'>Previous</button>
  <span className=' w-14 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400'>{page}</span>
  <button onClick={Next}  className=' w-17 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400'>Next</button>
</div>
</div>

<div className='middle'>
<h1 style={{
fontSize:'30px'
}}>All products</h1>
<div className="bor" style={{display:'flex'}}>
{
  products.map((product)=>{

    return(
    <div key={product._id} className='inside'>
      <img src={`http://localhost:8080/images/${product.image}`} style={{height:'100px',width:'230px'}} alt='helo'/>
    <h2>Name:  {product.name}</h2>
    <p>Description:  {product.description}</p>
    <p>price:   {product.price}</p>
    <p>Quntity:  {product.quantity}</p>
    <p>Category:  {product.category}</p>
    <Link to="/show_product"  state={{id:product._id}} className="w-17 h-14 mt-7  bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">Show  Product</Link>
    <Link to="/editProduct"  state={{id:product._id}} className="w-17 h-14 mt-7  bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">Edit</Link>
    </div>
  )})
 
}
</div>
<div className='w-100 flex justify-center items-center'> 
  <button onClick={prev}   className=' w-17 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400'>Previous</button>
  <span className=' w-14 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400'>{p}</span>
  <button onClick={nex}  className=' w-17 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400'>Next</button>
</div>
</div>
</div>
: 
  <h1>You are not admin</h1>
}
</>


  )
}

export default Admin
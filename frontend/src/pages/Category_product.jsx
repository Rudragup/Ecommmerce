import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './Header';
import { Link ,useLocation } from 'react-router-dom';

function category_product() {

     const location = useLocation();
     const {id} = location.state;
     console.log(id)
  const [products, setproducts]=useState([]);
  useEffect(()=>{
  const list = async ()=>{
  const res=await axios.post('http://localhost:8080/category_products',{id:id});
    setproducts(res.data);
    console.log(res.data);
  }
  list();
  },[])
  return (
<>
<Header />
<h1 style={{
fontSize:'50px'
}}>All products</h1>
<div style={{display:'flex'}}>
{
  products.map((product)=>{

    return(
    <div key={product._id} style={{display:'flex',justifyContent:'center',flexDirection:'column',  width:'20vw',border:'2px solid red'}}>
      <img src={`http://localhost:8080/images/${product.image}`} style={{height:'100px',width:'250px'}} alt='helo'/>
    <h2>Name:  {product.name}</h2>
    <p>Description:  {product.description}</p>
    <p>price:   {product.price}</p>
    <p>Quntity:  {product.quantity}</p>
    <p>Category:  {product.category}</p>
    <Link to="/show_product"  state={{id:product._id}} className="w-17 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">Show  Product</Link>
    <Link to="/editProduct"  state={{id:product._id}} className="w-17 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">Edit</Link>
    </div>
  )})
 
}
</div>
</>
  
  )
}

export default category_product
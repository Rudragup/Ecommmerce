import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/home.css'
function Home() {
  const[bestCategory,setCategory] =useState([]);
  const [bestProduct,setbestProduct]=useState([]);

  useEffect(()=>{
    const list = async ()=>{
      const res=await axios.get('http://localhost:8080/bestseller_category');
        setCategory(res.data);
        console.log(res.data);
      }
      list();
      console.log(bestProduct);
  },[])
  useEffect(()=>{
  const list = async ()=>{
  const res=await axios.get('http://localhost:8080/bestseller_product');
    setbestProduct(res.data);
    console.log(res.data);
   
  }
  list();
  console.log(bestProduct);
  },[])
  return (
    <div className='home1'>
      
      <h1  style={{
fontSize:'50px'
}}>Best Categories</h1>
       <div className='Home' style={{display:'flex'}}>
        <div style={{display:'flex'}}>
          {
            bestCategory.map(category=>{
              return (
                <div key={category._id} style={{border:'2px solid red',height:'40vh',width:'20vw'}}>
                  <img  src={`http://localhost:8080/images/${category.image}`}  alt='helo'/>
                  <div><h3>Name:{category.name}</h3>
                  <p>Desc:   {category.description}</p>
                  <br />
                  <Link to="/category_product" state={{id:category._id}} className=" w-17 mt-4 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">
Product
  
  </Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <br />
      <br />
      
      <h1  style={{
fontSize:'50px'
}}>Best Product</h1>
      <div className="Home" style={{display:'flex'}}>
      {
        bestProduct.map(product=>{
          const path=product.image;
          console.log(path);
          return (
          <div key={product._id} style={{border:'2px solid red',width:'20vw',height:'50vh'}}>
            <img  src={`http://localhost:8080/images/${path}`} alt='helo'/>
            <div><h3>Name:{product.name}</h3>
            <p>Desc:   {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Quntity: {product.quantity}</p>
            <p>Category :{product.category}</p>
         
            <Link to="/show_product"  state={{id:product._id}} className="w-17 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">Show  Product</Link>
            
            </div>
          </div>
        )})
      }
      </div>
    </div>
  )
}

export default Home
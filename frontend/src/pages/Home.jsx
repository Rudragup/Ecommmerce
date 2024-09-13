import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
function Home() {
  const [bestProduct,setbestProduct]=useState([]);
  useEffect(()=>{
  const list = async ()=>{
  const res=await axios.post('http://localhost:8080/bestseller_product');
    setbestProduct(res.data);
    console.log(res.data);
  }
  list();
  console.log(bestProduct);
  },[])
  return (
    <div>
      <Header />
      <h1>Best Categories</h1>
       <div className='Home'>
        <div></div>
      </div>
      <h1>Best Product</h1>
      <div className="Home" style={{display:'flex'}}>
      {
        bestProduct.map(product=>{
          const path=product.image;
          console.log(path);
          return (
          <div key={product._id} style={{border:'2px solid red',width:'20vw'}}>
            <img  src={`http://localhost:8080/images/${path}`} alt='helo'/>
            <div><h3>Name:{product.name}</h3>
            <p>Desc:   {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Quntity: {product.quantity}</p>
            <p>Category :{product.category}</p>
            </div>
          </div>
        )})
      }
      </div>
    </div>
  )
}

export default Home
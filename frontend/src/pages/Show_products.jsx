import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './Header';
import { Link ,useLocation } from 'react-router-dom';

function Show_products() {
const location = useLocation();
const {id}=location.state || {}; 
console.log(id);

const [products, setProducts] = useState();
const[image,setImage]=useState();
useEffect(()=>{
const list=async () => {
const res=await axios.post('http://localhost:8080/oneproduct',{id});

console.log(res.data);
setProducts(res.data)
setImage(res.data.image);
}
list();
},[])

  return (
   <>
    <Header />
    <div style={{border:'2px solid red',display:'flex'}}>
    <img src={`http://localhost:8080/images/${image}`}alt="hiii" srcset="" />
<div>    <h1> Name:                {products?.name}</h1>
    <p>Description:                {products?.description}</p>
    <p>Price:                {products?.price}</p>
    <p>Quantity :                { products?.quantity}</p>
    </div>
</div>
   </>
  )
}

export default Show_products
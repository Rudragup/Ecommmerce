import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './Header';
import { Link } from 'react-router-dom';
function Category() {
const [category,setCategory]=useState([]);

useEffect(()=>{
  const list = async ()=>{
    const res=await axios.post('http://localhost:8080/total');
   console.log(res.data.data);
    setCategory(res.data.data);
  }
  list();
},[])

  return (
  <>
  <Header />
  <h1 style={{
fontSize:'50px'
}}>All category</h1>
  <div style={{display:'flex'}}>
  {
    category.map((item)=>(
   
  <div key={item._id} style={{display:'flex',justifyContent:'center',flexDirection:'column',  height:'35vh',width:'20vw',border:'2px solid red'}}>
      <img  src={`http://localhost:8080/images/${item.image}`} style={{height:'100px',width:'250px'}} alt='helo' />
      
    <h2>Name:  {item.name}</h2>
    <p>Description:  {item.description}</p>
 <div style={{marginTop:'21px'}}>   <Link to="/category_product" state={{id:item._id}} className=" w-14 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">
Product
  
  </Link>
  <Link to="/editCategory" state={{id:item._id}} className=" w-14 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">
  Edit
  
  </Link>
</div>  
    </div>
      
    ))
  }
  </div>
  </>
  )
}

export default Category
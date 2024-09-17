import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
export default function Edit_category() {
    const location = useLocation();

    const {id} = location.state ;
    console.log(id);
    // fetch data from backend using categoryId and update it in state
    const [image,changeImage]=useState("");
    const [name,changeName]=useState("");
    const [description,changeDescription]=useState("");
    const [bestseller,changeBestseller]=useState(false);

useEffect( ()=>{
const list=async ()=>{
  const res=await axios.post('http://localhost:8080/editCategory',{id});
  console.log(res.data);
    changeImage(res.data.image);
    changeName(res.data.name);
    changeBestseller(res.data.isbestSeller);
    changeDescription(res.data.description);
}
list();

},[])

const handleSubmit =async(e)=>{
  e.preventDefault();
   
  const fileData = document.getElementById('file').files[0] 
  const formData = new FormData();  
  formData.append('_id',id);
  formData.append('file', fileData);
  formData.append('name',name);
  formData.append('description', description);
  formData.append('isbestSeller', bestseller);
  console.log(formData);
try{
const res=await axios.post('http://localhost:8080/changeCategory',formData);
console.log(res.data);
}
catch(e){
  console.log(e.message);
}
}
const handleseller=()=>{
  changeBestseller(!bestseller)
}
const handleimage=(e)=>{changeImage(e.target.files[0])};
const handlename=(e)=>{changeName(e.target.value)};

const handledescription=(e)=>{changeDescription(e.target.value)};
  return (
    <>
    <Header />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="w-full max-w-lg p-8 space-y-4 bg-white rounded shadow-lg">
           <h2 className="text-2xl font-bold text-center">Edit Categories</h2>
           <form onSubmit={handleSubmit}>
             <div className="form-control w-full">
               <label className="label">
                 <span className="label-text">Name:</span>
               </label>
               <input
                 type="text"
                 name="name"
                 className="input input-bordered w-full"
                 value={name}
                 onChange={handlename}
                 required
               />
               
             </div>
   
             <div className="form-control w-full mt-4">
               <label className="label">
                 <span className="label-text">Description:</span>
               </label>
               <textarea
                 name="description"
                 className="textarea textarea-bordered w-full"
                 rows="4"
                 value={description}
                 onChange={handledescription}
               ></textarea>
             </div>
   
             <div className="form-control w-full mt-4">
             <img src={`http://localhost:8080/images/${image}`} alt="" srcset="" />
               <label className="label">
                 <span className="label-text">Image:</span>
               </label>
               <input
                 type="file"
                 name="image"
                 id='file'
                 className="file-input file-input-bordered w-full"
               onChange={handleimage}
               />
             </div>
   
             <div className="form-control w-full mt-4">
               <label className="cursor-pointer label">
                 <span className="label-text">Is Bestseller:</span>
                 <input
                   type="checkbox"
                   name="isBestseller"
                   className="checkbox"
                   checked={bestseller}
                   onChange={handleseller}
                 />
               </label>
             </div>
   
             <button type="submit" className="btn btn-primary w-full mt-6">
               Edit Item
             </button>
           </form>
         </div>
       </div>
    </>
  )
}


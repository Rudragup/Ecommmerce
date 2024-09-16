import React from 'react'
import Header from './Header'
import { useState } from 'react';
import axios from 'axios';

function Add() {
  const [formdata, setFormdata] = useState({
    name: '',
    image: '',
    description: '',
    isbestSeller:false,
   
  });
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    console.log(formdata.isbestSeller);
    if (type === 'checkbox') {
      setFormdata({ ...formdata, [name]: checked });
    } else if (type === 'file') {
      setFormdata({ ...formdata, image: files[0] });
    } else {
      setFormdata({ ...formdata, [name]: value });
    }
  };


  const userid=localStorage.getItem('loggedInId');

  const [seller,setseller]=useState(false);
const handleseller=()=>{
 if(seller===false) setseller(true);
 else setseller(false);
  console.log(seller);
}
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const fileData = document.getElementById('file').files[0]
   
    const formData = new FormData();  

    formData.append('file', fileData);
    formData.append('name', formdata.name);
    formData.append('description', formdata.description);
    formData.append('isbestSeller', seller);
    formData.append('userId', userid)

    console.log(">>>>>>>>><<<<<<<<<<",formData)
    try{
      const res=await axios.post('http://localhost:8080/category',formData);
console.log(res.data)
}
catch(err) {
  alert(err);
}

  };

  return (
 <>
 <Header />
 <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-4 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center">Add New Categories</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name:</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              value={formdata.name}
              onChange={handleChange}
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
              value={formdata.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-control w-full mt-4">
            <label className="label">
              <span className="label-text">Image:</span>
            </label>
            <input
              type="file"
              name="image"
              id='file'
              className="file-input file-input-bordered w-full"
              onChange={handleChange}
            />
          </div>

          <div className="form-control w-full mt-4">
            <label className="cursor-pointer label">
              <span className="label-text">Is Bestseller:</span>
              <input
                type="checkbox"
                name="isBestseller"
                className="checkbox"
                checked={seller}
                onChange={handleseller}
              />
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-full mt-6">
            Add Item
          </button>
        </form>
      </div>
    </div>
 </>
  )
}


export default Add
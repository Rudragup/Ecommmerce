import React,{useEffect, useState}from 'react'
import Header from './Header';
import axios from 'axios';
function Add_products() {
    const [data, setdata] = useState({
      name: '',
      price: '',
      quantity: '',
      description: '',
      isBestseller: false,
      category: 'please select',
      image: '',
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setdata((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
      const handleSubmit = async (e) => {
          e.preventDefault();
           console.log(data);
        const userId=localStorage.getItem('loggedInId');
        const fileData = document.getElementById('file').files[0];

        const formData = new FormData(); 
        formData.append('file', fileData);
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('quantity', data.quantity);
        formData.append('description', data.description);
        formData.append('isbestSeller', data.isBestseller);
        formData.append('category', data.category);
        formData.append('userId', userId);
console.log(formData);

try{
const res=await axios.post('http://localhost:8080/product',formData);
console.log(res.data);
}
catch(e) {
    alert(e.message);
}
        
      };

const [drop,setDrop]=useState([]);
useEffect(()=>{
const list= async () =>{
    const res=await axios.get('http://localhost:8080/Category_details');
   console.log(res.data)
   setDrop(res.data);
}
list();
},[])
  return (
   <>
  
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-4 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Name:</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              value={data.name}
              onChange={handleChange}
              required
            />
          
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
            <label className="label">
              <span className="label-text">Price:</span>
            </label>
            <input
              type="number"
              name="price"
              className="input input-bordered w-full"
              value={data.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control w-full mt-4">
            <label className="label">
              <span className="label-text">Quantity:</span>
            </label>
            <input
              type="number"
              name="quantity"
              className="input input-bordered w-full"
              value={data.quantity}
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
              value={data.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-control w-full mt-4">
            <label className="label">
              <span className="label-text">Category:</span>
            </label>
            <select
              name="category"
              className="select select-bordered w-full"
              value={data.category}
              onChange={handleChange}
            >
              {
                drop.map((item) => (
                  <option key={item._id} value={item.name}>
                    {item.name}
                  </option>
                ))
              }
            </select>
          </div>

          <div className="form-control w-full mt-4">
            <label className="cursor-pointer label">
              <span className="label-text">Is Bestseller:</span>
              <input
                type="checkbox"
                name="isBestseller"
                className="checkbox"
                checked={data.isBestseller}
                onChange={handleChange}
              />
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-full mt-6">
            Add Product
          </button>
        </form>
      </div>
    </div>

   </>
  )
}

export default Add_products
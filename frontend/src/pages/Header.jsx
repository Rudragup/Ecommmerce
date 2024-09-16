import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
function Header() {
  const navigate = useNavigate();
  const [user,setUser]=useState(null);
  useEffect(()=>{
    setUser(localStorage.getItem("loggedInUser"));
    console.log("User logged in  "+user);
  },[])

  

  return (
<>
<header className="bg-blue-600 text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          {/* Logo */}
          <Link to="/home" className="text-2xl font-bold">
            <span className="text-yellow-300">My</span>App
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/home" className="hover:text-yellow-300">Home</Link>
          <Link to="/Add" className="hover:text-yellow-300">Add category</Link>
          <Link to="/Add_product" className="hover:text-yellow-300">Add Product</Link>
          <Link to="/Product" className="hover:text-yellow-300">Product</Link>
          <Link to="/Category" className="hover:text-yellow-300">Category</Link>
        </div>


      <h1>Welcome {user}</h1>
              {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
    </header>
</>
  )
}

export default Header
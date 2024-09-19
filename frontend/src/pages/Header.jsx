import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import checkAdmin from '../utils/checkAdmin';
function Header() {

  const [user, setUser] = useState(false);
  const [admin, setisAdmin] = useState(false);


  useEffect(() => {
  
      setUser(localStorage.getItem("loggedInUser"));
   if(localStorage.getItem("loggedInUser"))   setisAdmin(checkAdmin());
    
  })






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
            <Link to="/Product" className="hover:text-yellow-300">Product</Link>

            <Link to="/Category" className="hover:text-yellow-300">Category</Link>
            {admin ? <Link to="/admin" className="hover:text-yellow-300">Admin</Link> : null}
          </div>


          {/* // >>>>>>>>>>>>>>>  adding button on headers <<<<<<<<<<<<<<<<< */}
          {
            user ? (
              <div className="flex items-center space-x-4">
                <p className="text-white hover:text-yellow-300">Hello {user}</p>
                <button onClick={() => {
                  localStorage.removeItem("loggedInUser");
                  localStorage.removeItem("loggedInId");
                  localStorage.removeItem("token");
                  setUser(null);
                  setisAdmin(false);
                  window.location.href = "/home";

                }} className="text-white hover:text-yellow-300">Logout</button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-white hover:text-yellow-300">Login</Link>
                <Link to="/Signup" className="text-white hover:text-yellow-300">Signup</Link>
              </div>
            )
          }














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
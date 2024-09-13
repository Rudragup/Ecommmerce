import React, { useState } from 'react'
import {Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
function Login() {
    const navigate = useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

   async function handleSubmit(e){
        e.preventDefault();
        console.log(email,password);
    if(email=="" || password==""){
    return alert("Please enter your email address and password");
    }
        try{
             const res =await axios.post('http://localhost:8080/login',{"email":email,"password":password});
           const {success, message, jwtToken, name, error}=res.data;
            console.log(res.data);
           if(success) {
            alert(message);
            localStorage.setItem('token', jwtToken);
            localStorage.setItem('loggedInUser', name);
            setTimeout(() => {
                navigate('/')
            }, 1000)
           }
           else if (error) {
            const details = error?.details[0].message;
          alert(details);
        } else if (!success) {
          alert(message);
        }
        else{
            alert("Authentication is wrong. Please try again");
        }
        console.log(res.data);
        }
        catch(err){
            console.log("err"+ err);
        }
    }
    
  return (
    <>
  <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              placeholder="you@example.com"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              placeholder="••••••••"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to='/signup'>Signup</Link>
        </p>
      </div>
    </div>
    </>
  )
}

export default Login
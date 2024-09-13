import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Category';
import Add from './pages/Add';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Add_products from './pages/Add_products';
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<Add />} />
      <Route path="/category" element={<Category />} />
      <Route path='/product' element={<Product />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Add_product' element={<Add_products />} />
    </Routes> 
    </BrowserRouter>
    </>
  )
}
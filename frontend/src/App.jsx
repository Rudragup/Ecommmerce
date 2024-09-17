import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Category';
import Add from './pages/Add';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Add_products from './pages/Add_products';
import Edit_category from './pages/Edit_category';
import EditProduct from './pages/EditProduct';
import Category_Product from './pages/Category_Product';
import Show_products from './pages/Show_products';
import { useNavigate } from 'react-router-dom';
import Admin from './pages/Admin';
export default function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>} />
    <Route path="/" element ={<Signup />}/>
      <Route path="/add" element={<Add />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/category" element={<Category />} />
      <Route path='/product' element={<Product />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Add_product' element={<Add_products />} />
      <Route path='/editCategory' element={<Edit_category />} />
      <Route path='/editProduct' element={<EditProduct />} />
      <Route path='/category_product' element={<Category_Product />} />
      <Route path='/show_product' element={<Show_products />} />
    </Routes> 
    </BrowserRouter>
    </>
  )
}
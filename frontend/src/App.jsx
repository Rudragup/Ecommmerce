import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import Admin from './pages/Admin';
import checkAdmin from './utils/checkAdmin';
import Header from './pages/Header';

export default function App() {


  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin,setAdmin]=useState(false);

  const adminRoutes = [
    { path: "/admin", component: Admin },

    { path: "/home", component: Home },
    { path: "/product", component: Product },
    { path: "/category", component: Category },

    { path: "/add", component: Add },
    { path: "/Add_product", component: Add_products },

    { path: "/editProduct", component: EditProduct },
    { path: "/editCategory", component: Edit_category },

    { path: "/category_product", component: Category_Product },
    { path: "/show_product", component: Show_products },

    { path: "/signup", component: Home },
    { path: "/login", component: Home }
  ]


  const publicRoutes = [
    { path: "/home", component: Home },
    { path: "/product", component: Product },
    { path: "/category", component: Category },
    { path: "/signup", component: Home },
    { path: "/login", component: Home },
    { path: "/category_product", component: Category_Product },
    { path: "/show_product", component: Show_products }

  ]

  const validationRoutes = [
    { path: "/home", component: Home },
    { path: "/product", component: Product },
    { path: "/category", component: Category },
    { path: "/category_product", component: Category_Product },
    { path: "/show_product", component: Show_products },


    { path: "/signup", component: Signup },
    { path: "/login", component: Login }
  ]

  useEffect(() => {
   
    const token = localStorage.getItem('token')
    if (token) {
      setLoggedIn(true)
      console.log(">>>>>>>"+checkAdmin())
      setAdmin(checkAdmin(token));
    }
    else {
      setLoggedIn(false)
    }
  })


  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          {
            loggedIn ? 
           isAdmin ? adminRoutes.map((route) => {
                return <Route path={route.path} element={<route.component />} />
              })
            
            : publicRoutes.map((route) => {
                return <Route path={route.path} element={<route.component />} />
              })
              : validationRoutes.map((route) => {
                return <Route path={route.path} element={<route.component />} />
              })
          }
        </Routes>
      </BrowserRouter>
    </>
  )
}
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './Header';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Product() {

  const navigate = useNavigate();
  const [p, setp] = useState(1);
  const [tp, settp] = useState(1);
  const location = useLocation();
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const pageFromUrl = queryParams.get('p');
    console.log(pageFromUrl);
    setp(pageFromUrl ? parseInt(pageFromUrl, tp + 5) : 1);
    console.log(p)
  }, [location]);
  useEffect(() => {
    const list = async () => {
      const res = await axios.post('http://localhost:8080/all_products', { page: p });
      setproducts(res.data.data);
      settp(res.data.totalPages);
      console.log(res.data);
    }
    list();
  }, [p, setp])

  const prev = () => {
    if (p > 1) {
      setp(p - 1);
      navigate(`?p=${p - 1}`);
    }
  }

  const nex = () => {
    if (p < tp) {
      setp(p + 1);
      navigate(`?p=${p + 1}`);
    }
  }
  return (
    <>
      <Header />
      <h1 style={{
        fontSize: '50px'
      }}>All products</h1>
      <div style={{ display: 'flex' }}>
        {
          products.map((product) => {

            return (
              <div key={product._id} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '20vw', border: '2px solid red' }}>
                <img src={`http://localhost:8080/images/${product.image}`} style={{ height: '100px', width: '250px' }} alt='helo' />
                <h2>Name:  {product.name}</h2>
                <p>Description:  {product.description}</p>
                <p>price:   {product.price}</p>
                <p>Quntity:  {product.quantity}</p>
                <p>Category:  {product.category}</p>
                <Link to="/show_product" state={{ id: product._id }} className="w-17 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">Show  Product</Link>

              </div>
            )
          })

        }
      </div>
      <div className='w-100 flex justify-center items-center'>
        <button onClick={prev} className=' w-17 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400'>Previous</button>
        <span className=' w-14 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400'>{p}</span>
        <button onClick={nex} className=' w-17 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400'>Next</button>
      </div>
    </>
  )
}

export default Product  
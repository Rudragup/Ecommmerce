import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

function Category() {
  const [category, setCategory] = useState([]);
  const userid = localStorage.getItem("loggedInId");
  console.log(userid)
  const [page, setpage] = useState(1);
  const [totalPages, settotalPages] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const pageFromUrl = queryParams.get('page');
    console.log(pageFromUrl);
    setpage(pageFromUrl ? parseInt(pageFromUrl, totalPages + 1) : 1);
  }, [location]);

  useEffect(() => {
    const list = async () => {
      const res = await axios.get(`http://localhost:8080/all_category?page=${page}`);
      console.log(res.data);
      setCategory(res.data.products);
      settotalPages(res.data.totalPages);
    }
    list();
  }, [page, setpage])

  const previous = () => {
    if (page > 1) {
      setpage(page - 1);
      console.log(page - 1);
      navigate(`?page=${page - 1}`);
    }
  }

  const Next = () => {
    if (page < totalPages) {
      setpage(page + 1);
      console.log(page + 1);
      navigate(`?page=${page + 1}`);
    }
  }




  return (
    <>

      <h1 style={{
        fontSize: '50px'
      }}>All category</h1>
      <div style={{ display: 'flex' }}>
        {
          category.map((item) => (
            // console.log(item)
            <div key={item._id} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '35vh', width: '20vw', border: '2px solid red' }}>
              <img src={`http://localhost:8080/images/${item.image}`} style={{ height: '100px', width: '250px' }} alt='helo' />

              <h2>Name:  {item.name}</h2>
              <p>Description:  {item.description}</p>
              <div style={{ marginTop: '21px' }}>  
                
 <Link to="/category_product" state={{ id: item._id }} className=" w-14 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">
                Product

              </Link>
              
              </div>
            </div>

          ))
        }
      </div>
      <div className='mt-10 w-100 flex justify-center items-center'>
        <button onClick={previous} className=' w-17 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400'>Previous</button>
        <span className=' w-14 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400'>{page}</span>
        <button onClick={Next} className=' w-17 bg-yellow-300 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400'>Next</button>
      </div>
    </>
  )
}

export default Category
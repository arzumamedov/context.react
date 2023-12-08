import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { BasketContext } from '../../context/BasketProvider'
import { WishlistContext } from '../../context/WishlistContext'
import Navbar from '../Navbar'
import './style.css'

function MainLayout() {

  const [data, setData] = useState([])
  const { addBasket } = useContext(BasketContext)
  const { wishList, addWishlist } = useContext(WishlistContext);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then((api) => setData(api))
      console.log(data);
  }, [])


  return (
    <>
      <Navbar />
      <div className='cards'>
        <h1>Fuad</h1>
        {console.log(data )}
        {data.map((item) => (
          <ul>
            <li><img src={item.image} alt="" />
              <li><i className="fa-regular fa-heart" onClick={()=>{addWishlist(item)}}></i></li></li>
            <li>Title:{item.title}</li>
            <li>Price:${item.price} <span>$35.00</span></li>
            <button className='button' onClick={() => { addBasket(item) }}>Add Basket</button>

          </ul>

        ))}
      </div>
      <Outlet />
    </>
  )
}

export default MainLayout
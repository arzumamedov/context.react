import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketProvider';
import Navbar from '../../layout/Navbar';
import './style.css'
function BlogPage() {
    const { basket, artirmaq, azaltmaq, remove } = useContext(BasketContext);

    return (
        <div>
            <Navbar />
            {basket.length ? (

                <div className="cards">

                    {basket.map((item) => (

                        <ul>
                            <li><img src={item.image} alt="" /></li>
                            <li>Title:{item.title}</li>
                            <li>Price:${item.price * item.count} <span>$35.00</span></li>
                            <button className='btn' onClick={() => artirmaq(item)}>+</button>
                            <p>{item.count}</p>
                            <div className='btnn'>
                                <button className='btn' onClick={() => azaltmaq(item)}>-</button>
                                <button className='btn' onClick={() => { remove(item) }}>X</button>
                            </div>

                        </ul>
                    ))}


                </div>
            ) : (
                <h1>Basket bosdur</h1>
            )}



        </div>
    )
}


export default BlogPage
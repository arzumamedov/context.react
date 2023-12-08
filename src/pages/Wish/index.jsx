import React, { useContext } from 'react';
import { WishlistContext } from '../../context/WishlistContext';
import Navbar from '../../layout/Navbar';

function Wish() {
    const { wishList, addWishlist } = useContext(WishlistContext);
    console.log("salam");
    return (
        <>
            <Navbar />

            {wishList.length ? (

                <div className="cards">
                    {wishList.map((item) => (

                        <ul>
                            <li><img src={item.image} alt="" /></li>
                            <li>Title:{item.title}</li>
                            <li>Price:${item.price * item.count} <span>$35.00</span></li>
                            <button className='btn' onClick={() => addWishlist(item)}>+</button>
                            <div className='btnn'>
                                <button className='btn' onClick={() => addWishlist(item)}>X</button>
                            </div>

                        </ul>
                    ))}


                </div>
            ) : (
                <h1>Basket bosdur</h1>
            )}




        </>

    )
}

export default Wish
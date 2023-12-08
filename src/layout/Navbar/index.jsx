import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { useContext } from 'react'
import { BasketContext } from '../../context/BasketProvider'
function Navbar() {
    const { basket } = useContext(BasketContext)
    return (
        <div className='navbar'>
            <div className='navbarLeft'>
                <Link to={"/"}><img src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp" alt="" /></Link>
            </div>
            <div className='navbarCenter'>
                <p>HOME</p>
                <p>CONTACT</p>
                <p>BLOG</p>
                <p>PAGES</p>
            </div>
            <div className='navbarRight'>
                <Link to={"/"}><i class="fa-solid fa-house"></i></Link>
                <input type="text" />
                <i class="fa-solid fa-magnifying-glass"></i>
                <Link to={"/shop"}><i class="fa-solid fa-cart-shopping"></i><sup>{basket.length}</sup></Link>
                <i class="fa-regular fa-user"></i>
                <Link to={"/wish"}><i class="fa-regular fa-heart"></i></Link>
                


            </div>
        </div>
    )
}

export default Navbar
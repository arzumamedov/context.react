import React, { createContext } from 'react'
import useLocalStorage from '../hook/useLocal';

export const WishlistContext = createContext();


function WishlistProvider({ children }) {
    const [wishList, setWishList] = useLocalStorage('wishlist', [])
    function addWishlist(item) {
        console.log(item);
        if (wishList.findIndex((x) => x.id === item.id)) {
            setWishList(wishList.filter((x) => x.id !== item.id))

            return
        }
        else {
            setWishList([...wishList, item])
        }
    }

    return (

        <WishlistContext.Provider value={{wishList, addWishlist}    }>
            {children}
        </WishlistContext.Provider>

    )
}

export default WishlistProvider
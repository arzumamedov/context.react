import { createContext, useState } from 'react'
import useLocalStorage from '../hook/useLocal';


export const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  function addBasket(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (index === -1) {
      setBasket([...basket, { ...item, count: 1 }]);
      console.log(count);
      return
    }
    basket[index].count++
    setBasket([...basket])
  }
  function remove(item) {
    setBasket(basket.filter(x=>x.id !== item.id))

  }

  function artirmaq(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    basket[index].count++
    setBasket([...basket])
  }

  function azaltmaq(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (basket[index].count === 1) {
      return
    } else {
      const index = basket.findIndex((x) => x.id === item.id);
      basket[index].count--
      setBasket([...basket])
    }
  }



  const data = { basket, addBasket, artirmaq, azaltmaq, remove }

 

  return (
    <>
      <BasketContext.Provider value={data}>
        {children}
      </BasketContext.Provider>
    </>
  )
}

export default BasketProvider
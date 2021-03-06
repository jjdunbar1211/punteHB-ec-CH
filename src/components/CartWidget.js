import React from 'react'
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {

    // uso el contexto
    const { cart } = useContext(CartContext)
  
    return (
        <div className="py-2 rounded-lg transform hover:scale-105 transition-all ease-out duration-300">
            <div className="flex items-stretch ">    
                <svg className="py-2 w-8 h-12 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                { cart.length > 0 && <h4 className="text-sm font-semibold px-1 self-start rounded-2xl border-pink-500 border-2 ">{cart.reduce((accumulated, i) => accumulated += i.amount, 0)}</h4>}
            </div>
            
        </div >
    )

}

export default CartWidget
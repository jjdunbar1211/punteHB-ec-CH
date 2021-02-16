import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from './CartContext';

const ItemCount = ({ item, id, add, substract, counter }) => {

        const [ isCartReady, setIsCartReady ] = useState(false)
        const { addToCart } = useContext(CartContext)
    
        const addAndReady = (item, counter, id) => {
            addToCart(item, counter, id);
            setIsCartReady(true)
        }

    return (
        <div className="flex flex-col">  
            <div className="flex justify-around items-center">
                <span onClick={ substract }  disabled={isCartReady} hidden={isCartReady}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </span>
                <p className="text-xl font-bold">{ counter }<span className="pl-2 text-xl font-bold" hidden={!isCartReady}> {counter === 1 ? "unidad" : "unidades"}</span></p>
                <span onClick={ add }  disabled={isCartReady} hidden={isCartReady}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                </span>
            </div>
            <div>
                { !isCartReady ? 
                    (<button
                        className="w-46 bg-white tracking-wide text-pink-400 font-bold rounded-xl border-2 border-pink-400 hover:text-white hover:bg-pink-400 hover:shadow-md transition-all ease-out duration-500 py-2 px-6 inline-flex items-center"
                        type="button" onClick={ () => addAndReady(item, counter, id) }  > Agregar al carrito 
                    </button>)
                 : 
                    (<Link to="/cart">
                       <button
                           className="w-46 bg-white tracking-wide text-pink-400 font-bold rounded-xl border-2 border-pink-400 hover:text-white hover:bg-pink-400 hover:shadow-md transition-all ease-out duration-500 py-2 px-6 inline-flex items-center"
                           type="button"> Terminar la compra 
                       </button>
                    </Link>)
                }  
            </div>
        </div>
    )
}

export default ItemCount

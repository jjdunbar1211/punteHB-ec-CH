import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const ItemCount = ({ add, substract, agregarAlCarrito, item, counter, isCartReady }) => {
    return (
        <div className="flex flex-col ">  
            <div className="flex justify-around">
                <button onClick={ substract }  disabled={isCartReady}>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <p >{ counter }</p>
                <button onClick={ add }  disabled={isCartReady}>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div>
                { !isCartReady ? 
                    (<button
                        class="w-46 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-pink-200 hover:border-pink-800 hover:bg-grey-800 hover:text-pink-800 shadow-md py-2 px-6 inline-flex items-center"
                        type="button" onClick={ () => agregarAlCarrito(item) }  > Agregar al carrito 
                    </button>)
                 : 
                    (<Link to="/cart">
                       <button
                           class="w-46 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-pink-200 hover:border-pink-800 hover:bg-grey-800 hover:text-pink-800 shadow-md py-2 px-6 inline-flex items-center"
                           type="button"> Terminar la compra 
                       </button>
                    </Link>)
                }  
            </div>
        </div>
    )
}

export default ItemCount

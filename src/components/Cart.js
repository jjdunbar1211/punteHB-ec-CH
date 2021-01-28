import React, {useContext} from 'react';
import {CartContext} from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const {cart, clearCart,eliminateFromCart, total} = useContext(CartContext);
    
    return (
    <div >
        { cart.length > 0 ? 
         <div>    
            <div className="mt-4 flex justify-center ">
                <table className="table-auto shadow bg-gray-100">
                    <thead>
                        <tr>
                            <th className="w-1/5">Artículo</th>
                            <th className="w-1/5">Cantidad</th>
                            <th className="w-1/5">Precio Unitario</th>
                            <th className="w-1/5">Precio</th>
                            <th className="w-1/5">Eliminar del carrito</th>
                        </tr>
                    </thead>
                    <tbody>
                    { cart.map(p =>(
                        <tr>
                                <td className="text-center">{p.name}</td>
                                <td className="text-center">{p.amount}</td>
                                <td className="text-center">${p.price}</td>
                                <td className="text-center">${p.price * p.amount}</td>
                                <td className="flex justify-center ">
                                   <button onClick={() => {eliminateFromCart(p.id)}}>
                                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                                   </button>
                                </td>
                        </tr>))
                    }                                 
                    </tbody>
                </table> 
                <p className="bg-gray-100 text-lg font-bold shadow self-end">{`Total: $${total}`}</p>
            </div>  
            <div className="mt-4 flex justify-center">
                {/* falta implementar la simulación de la compra */}
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    COMPRARRR
                </button>
            </div>    
         </div>
         :
        ( <div className="mt-4">
            <h1 className="text-center">Tu carrito aún está VACÍO</h1>
            <Link className="flex justify-center" to={"/"}>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-2 py-2 px-4 border border-gray-400 rounded shadow" onClick={clearCart} >
                    Ver PRODUCTOS
                </button>
            </Link>
        </div>)
        }
    </div>
    )
}

export default Cart;
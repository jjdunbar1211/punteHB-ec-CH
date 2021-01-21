import React,{useEffect,useContext} from 'react';
import {CartContext} from './CartContext';

const Cart = () => {

    const {cart} = useContext(CartContext);
    
    return (
        <div className="mt-4 flex justify-center ">
            <table className="table-auto shadow bg-gray-100">
                <thead>
                    <tr>
                        <th className="w-1/4">Artículo</th>
                        <th className="w-1/4">Cantidad</th>
                        <th className="w-1/4">Precio Unitario</th>
                        <th className="w-1/4">Precio</th>
                    </tr>
                </thead>
                <tbody>
                { cart.map(p =>(
                    <tr>
                            <td className="text-center">{p.name}</td>
                            <td className="text-center">{p.amount}</td>
                            <td className="text-center">{p.price}</td>
                            <td className="text-center">{p.price * p.amount}</td>
                    </tr>))
                }                                 
                </tbody>
            </table> 
        </div>    
    )
}

export default Cart;
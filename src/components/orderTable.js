import React, {useContext} from 'react'
import {CartContext} from './CartContext';

const OrderTable = () => {

    const { cart, eliminateFromCart } = useContext(CartContext);

    return ( 
        <table className="table-auto bg-gray-100 border-2 border-gray-800">
        <thead className="border-b-2 border-gray-800">
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
                    <td className="text-center">
                        <div className="flex-col justify-center">
                            <button className=" flex-col justify-center transform hover:scale-125 transition ease-out duration-200" onClick={() => {eliminateFromCart(p.id)}}>
                               <svg className="w-6 h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </td>
            </tr>))
        }                                 
        </tbody>
    </table> 

     );

}
 
export default OrderTable;
import React,{useEffect,useContext} from 'react';
import {CartContext} from './CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {

    const {cart, clearCart, total} = useContext(CartContext);
    
    return (
    <div>    
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

    <div >
        { cart.length > 0 ? 
        (<h1>Dale, compra!</h1>) :
        ( <>
        <h1>Aún no elegiste tus productos</h1>
            <Link to={"/"}>
            <button onClick={clearCart} >
                Llevame a tus fantásticos productos
            </button>
        </Link>
        </>)}
        <div >
            { cart.length > 0 && cart.map( product => <CartItem key={product.id} 
            id={product.id} name={product.name} image={product.image} price={product.price} 
            amount={product.amount} />)}
        </div>


        { cart.length > 0 &&
            <>
            <h2>${total}</h2>
            <div >
                <button onClick={clearCart} variant="contained" color="primary">
                    Saca todo del carrito che
                </button>
                <button onClick={() => {console.log(cart)}} variant="contained" color="primary">
                    A pagar! 
                </button>
            </div>
            </>}
    </div>

</div>
    )
}

export default Cart;
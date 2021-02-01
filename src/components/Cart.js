import React, {useContext, useState} from 'react';
import {CartContext} from './CartContext';
import { Link } from 'react-router-dom';
import {firestore} from '../firebase';
import firebase from 'firebase/app';

const Cart = () => {

    const {cart, clearCart,eliminateFromCart, total} = useContext(CartContext);

    // 
    const [ openPay, setOpenPay ] = useState(false)
    // campos que me piden para la orden de compra
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState()
    const [ email, setEmail ] = useState()

    const submitOrder = () => {

        const db = firestore
        const orders = db.collection('orders')

        const order = {
            buyer: { name: name, phone: phone, email: email},
            items : cart.map(function(obj){
                return {id: obj.id, name: obj.name, price: obj.price, quantity: obj.amount} ;
             }),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total,
        }

        orders.add(order)
            .then(({ id }) => alert("Id de tu compra: " + id))
            .catch((error) => console.log(error))

        setOpenPay(false)
        clearCart()
    }
    
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
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        onClick={() => {setOpenPay(true)}} >
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
        { openPay && 
            <form onSubmit={submitOrder}>
                <div className="flex justify-center mt-4 ">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                        <div className="mb-4">
                          <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                            Nombre
                          </label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Nombre"
                                 onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-4">
                          <label className="block text-grey-darker text-sm font-bold mb-2" for="phone">
                            Teléfono
                          </label>
                          <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="phone" type="number" placeholder="11 11111" 
                                 onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="mb-4">
                          <label className="block text-grey-darker text-sm font-bold mb-2" for="email">
                            Email
                          </label>
                          <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="email" type="text" placeholder="micompra@gmail.com" 
                                 onChange={(e) => setEmail(e.target.value)} />
                        </div> 
                        <div className="flex  ">
                            <Link to="/">       
                                <button className="hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-gray-400 shadow" type="button" 
                                        onClick={submitOrder} >
                                  Click aquí para terminar!
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
          </form>}

    </div>
    )
}

export default Cart;
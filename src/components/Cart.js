import React, {useContext, useState} from 'react';
import {CartContext} from './CartContext';
import { Link } from 'react-router-dom';
import {firestore} from '../firebase';
import firebase from 'firebase/app';
import OrderForm from './OrderForm';

const Cart = () => {

    const {cart, clearCart,eliminateFromCart, total} = useContext(CartContext);

    // 
    const [ openPay, setOpenPay ] = useState(false)
    // campos que me piden para la orden de compra
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState()
    const [ email, setEmail ] = useState()

    //Funcion para actualizr los stocks en firestore de los productos recien comprados
    const updateStocks = () => {
       
        const db = firestore
        const products =  db.collection('products');
        const batchProducts = db.batch()

        cart.forEach( itemCart => {
            console.log(itemCart)
            let aux = itemCart.stock - itemCart.amount
            console.log(aux)
            batchProducts.update(products.doc(itemCart.id),{initialStock: aux})
        })

        batchProducts
            .commit()
            .then(()=> {
                console.log("Bache ok")
            })
            .catch(e => console.log(e))
    }

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

        updateStocks()

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
                <button className="btn2"
                        onClick={() => {setOpenPay(true)}}
                        hidden={openPay} >
                    COMPRARRR
                </button>
            </div>    
         </div>
         :
        ( <div className="mt-4">
            <h1 className="text-center font-semibold"> - Tu carrito aún está VACÍO - </h1>
            <Link className="flex justify-center" to={"/"}>
                <div>    
                        👉👉👉
                        <button className="btn2 mt-2 mx-2" onClick={clearCart} >
                            Ver PRODUCTOS
                        </button> 
                        👈👈👈
                </div>
            </Link>
        </div>)
        }
        { openPay && <OrderForm fnes={{setName, setPhone, setEmail, submitOrder}} /> }

    </div>
    )
}

export default Cart;


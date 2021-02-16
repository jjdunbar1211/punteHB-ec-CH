import React, {useContext, useState} from 'react';
import {CartContext} from './CartContext';
import { Link } from 'react-router-dom';
import {firestore} from '../firebase';
import firebase from 'firebase/app';
import OrderForm from './OrderForm';
import OrderTable from './orderTable';

const Cart = ( {reload, setReload} ) => {

    const {cart, clearCart, total} = useContext(CartContext);

    const [ openPay, setOpenPay ] = useState(false)
    // campos que me piden para la orden de compra
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState()
    const [ email, setEmail ] = useState()

    // fn para actualizar los stocks de los productos que fueron comprados
    const updateStocks = () => {
       
        const db = firestore
        const products = db.collection('products');
        const batchProducts = db.batch()

        cart.forEach( itemCart => {
            let aux = itemCart.stock - itemCart.amount
            batchProducts.update(products.doc(itemCart.id),{initialStock: aux})
        })

        batchProducts
            .commit()
            .then(()=> {
                setReload(!reload)
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
                <OrderTable />
                <p className="bg-gray-100 px-2 border-b-2 border-t-2 border-r-2 border-gray-800 text-lg font-bold self-end">{`Total: $${total}`}</p>
            </div>  
            <div className="mt-4 flex justify-center">
                <div hidden={openPay}>
                    👉👉👉
                    <button className="btn2 mx-2"
                            onClick={() => {setOpenPay(true)}} >
                          COMPRAR 
                    </button> 
                    👈👈👈
                </div>
                { openPay && <OrderForm fnes={{setName, setPhone, setEmail, submitOrder}} /> }
            </div>    
         </div>
         :
        ( <div className="mt-4">
            <h1 className="text-center font-semibold"> - Tu carrito aún está VACÍO - </h1>
                <div className="flex justify-center items-center">    
                    👉👉👉
                        <Link to={"/"}>
                        <button className="btn2 mt-2 mx-2"  >
                            Ver PRODUCTOS
                        </button> 
                        </Link>
                    👈👈👈
                </div>
          </div>)
        }
    </div>
    )

}

export default Cart;


import React, { useContext } from 'react';

import { CartContext } from './CartContext'


function CartItem( { id, name, image, price, amount }) {
    const { eliminateFromCart } = useContext(CartContext)

    return (
        <div >
            <div>
                <h3>{name}</h3>
            </div>
            <div >
                <img src={image} alt={name} />
            </div>
            <div>
                <h3>${price}</h3>
            </div>
            <div >
                <h3>{amount}</h3>
            </div>
            <div >
                <h3>${amount*price}</h3>
            </div>
            <button onClick={ () => eliminateFromCart(id)} >
                Eliminar
            </button>
        </div>
    )
}

export default CartItem
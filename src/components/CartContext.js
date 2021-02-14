import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext();

function CartProvider( { children }) {

    const [ cart, setCart ] = useState(() => {
        const localCart = localStorage.getItem('itemsAllevar')
        return localCart ? JSON.parse(localCart) : []
    })
    const [ quantity, setQuantity ] = useState(0)
    const [ total, setTotal ] = useState()

    useEffect(() => {
        localStorage.setItem('itemsAllevar', JSON.stringify(cart))
        const totals = cart.map( p => p.price * p.amount)
        setTotal(totals.reduce((accumulated, t) => accumulated += t, 0))
        const cartQuantity = cart.length
        setQuantity(cartQuantity)
    }, [cart])

    function isInCart(id){
        const item = cart.find(p => p.id === id)
        return item === undefined ? false : true
    }

    function addToCart(product, counter, id) {
        if (isInCart(id)){
            const oldProduct = cart.find(p => p.id === id)
            const newQuantity = oldProduct.amount + counter           
            const newProduct = { id: oldProduct.id, name: oldProduct.title, image: oldProduct.image, price: oldProduct.price, amount: newQuantity}
            const cartWithoutOld = cart.filter(product => product.id =! id)
            const cartWithNew = [...cartWithoutOld, newProduct]
            setCart(cartWithNew)            
        } else {
            const newItem = { id: product.id, name: product.title, image: product.image, price: product.price, stock: product.initialStock, amount: counter}
            setCart([...cart, newItem]) 
        }
    }

    function eliminateFromCart(id){
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart)
    }

    function clearCart(){
        setCart([])
        setQuantity(0)
    }

    return (
        <CartContext.Provider value ={{ cart, quantity, total, addToCart, eliminateFromCart, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;
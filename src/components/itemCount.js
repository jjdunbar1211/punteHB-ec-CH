import React, { useState } from 'react'

const ItemCount = ({ initialStock }) => {

    const stock = initialStock
    const [ counter, setCounter ] = useState(0)

    const incrementarCantidad = () => {
        if(counter <= stock -1){
          setCounter(counter + 1)
        }
      }
      const descrementarCantidad = () => {
          if(counter > 0) {
              setCounter(counter -1)
          } else {
              console.log('No hay unidades de este producto en el carrito')
          }
      }
      const agregarAlCarrito = () => {
          if(stock - counter >= 0){
              setCounter(0)  
              console.log(`[al carrito] PunteHB - 1: ${counter}` )  
          } else {
              console.log('Hubo algún error')
          }
      }


    return (
        <div className="flex flex-col ">  
            <div className="flex justify-around">
                <button onClick={ descrementarCantidad }  disabled={counter === 0}>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <p >{ counter }</p>
                <button onClick={ incrementarCantidad }  disabled={stock - counter === 0}>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div>
                <button
                    class="w-46 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-pink-200 hover:border-pink-800 hover:bg-grey-800 hover:text-pink-800 shadow-md py-2 px-6 inline-flex items-center"
                    type="button" onClick={ agregarAlCarrito }  disabled={counter === 0}> Agregar al carrito 
                </button>
            </div>
        </div>
    )
}

export default ItemCount

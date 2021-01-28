import React, {useState, useEffect} from 'react'
import ItemCount from './itemCount'
import {storage} from '../firebase'

const ItemDetail = ({item}) => {

  const stock = (item) ? item.initialStock : 0 
  const [ counter, setCounter ] = useState(1) 

  const st = storage.ref('/products-images')
  const [img, setImg] = useState()

  useEffect(() => {
      st.child(item.pictureUrl).getDownloadURL()
          .then( res => { setImg(res) })
  })
    
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

    return(
      <div className="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-2/3">
        <img className="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6" src={img ? img : 'wait'} alt={`Producto: ${item.title}`} />
        <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
          <div className="flex items-center">
            <h2 className="text-xl text-gray-800 font-medium mr-auto">{item.title}</h2>
            <div className="flex justify-center flex-col p-1">
              <p className="text-right text-gray-500 font-semibold tracking-tighter">
                apurate!!
              </p>  
              <span className="text-gray-800 font-medium">{`últimas ${item.initialStock}`}</span>
            </div>  
          </div>
          <p className="text-sm text-gray-700 mt-4">
            Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
          </p>
          <div className="flex items-center justify-between mt-2 top-auto">
            <div className="badge m-4 flex justify-end align-baseline">
              <div>
                  <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                  <span className="font-semibold">{item.price}</span>
              </div>
              <div className="ml-2">
                  <svg class="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"></path></svg>
                  <span className="font-semibold">{item.price*1.2}</span>
              </div>
            </div>  
            <div>
              <ItemCount add={incrementarCantidad} substract={descrementarCantidad} item={item} counter={counter} id={item.id}/>
            </div>  
            
          </div>
        </div>  
      </div>
    )
}
        
export default ItemDetail

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {storage} from '../firebase'

const Item = ({ id, title, description, price, pictureUrl, initialStock }) => {
    const st = storage.ref('/products-images')
    const [img, setImg] = useState()

    useEffect(() => {
        st.child(pictureUrl).getDownloadURL()
            .then( res => { setImg(res) })
    })
    
    return (
      <Link to={`/item/${id}`}> 
            <div className="flex justify-center mb-2">
                <div disabled={(initialStock === 0)} className= { (initialStock === 0) ? "card bg-gray-50 w-6/12 rounded overflow-hidden " : "card bg-gray-50 hover:shadow-lg w-6/12 rounded overflow-hidden hover:bg-white transform hover:scale-105 transition ease-in-out duration-500" }> 
                    <img src={img ? img : 'wait'} alt={`Producto: ${title}`} className="h-32 sm:h-48 w-full object-cover" />
                    <div className="m-4">
                        <span className="font-bold">{title}</span>
                        <hr />
                        <span className="block text-gray-500 text-sm">{description} </span>
                    </div>
                    <div className={ (initialStock > 0) ? "badge m-4 flex justify-around align-baseline" : "badge m-4 flex justify-center" }>
                        <div className={ (initialStock === 0) ? "flex justify-center ": "hidden"}>
                            <h3 className="text-lg text-red-600 font-bold border-2 border-red-600 px-2 rounded ">SIN STOCK</h3>
                        </div>
                        <div className={ (initialStock !== 0) ? "": "hidden"}>
                            <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                            <span className="font-semibold">{price}</span>
                        </div>
                        <div className={ (initialStock !== 0) ? "": "hidden"}>
                            <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path></svg>
                            <span className="font-semibold">{price*1.2}</span>
                        </div>
                    </div>
                </div>    
            </div>
        </Link> 
      
        
    )
}

export default Item

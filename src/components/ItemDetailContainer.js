import React, { useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import Spinner from './Spinner'
import { useParams } from 'react-router-dom'
import { firestore } from '../firebase'

const ItemDetailContainer = () => {

    const [item, setItem] = useState();

    const {id} = useParams()

    useEffect(() => {
       
        const db = firestore
        const collection = db.collection('products') 
        const item = collection.doc(id)
   
        item.get()
         .then( i => {
           setItem({ id: i.id, ...i.data()})
         })
   
     }, [id]);

    return ( 
            <div >
                {item ? <ItemDetail item={item} /> : < Spinner />}
            </div> 
    )
}

export default ItemDetailContainer

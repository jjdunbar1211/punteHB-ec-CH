import React, { useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import Spinner from './Spinner'
import NEProduct from './NEProduct'
import { useParams } from 'react-router-dom'
import { firestore } from '../firebase'

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading ] = useState(true);

    const {id} = useParams()

    useEffect(() => {
       
        const db = firestore
        const collection = db.collection('products') 
        const item = collection.doc(id)
   
        item.get()
            .then( i => {
                if(!i.exists){
                    setItem("item not exist")
                    return;
                }
                setItem({ id: i.id, ...i.data()})
            })
            .catch( error => console.log(`[ItemDetailContainer]: ${error.message}`))
            .finally(()=> {
                setLoading(false)
            })
    
   
     }, [id]);

    if(loading) {
        return (
            <Spinner/>
        )
    } else if(item === "item not exist"){
        return(
            <NEProduct msg={`No existe producto con  Id: ${id}`} />
        )
    } else {
        return(
            <div className="bg-gray-100 flex justify-center items-center h-screen">
                <ItemDetail item={item} /> 
            </div>  
        )
    }
}

export default ItemDetailContainer




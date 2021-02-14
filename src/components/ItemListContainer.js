import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import Spinner from './Spinner'
import {useParams} from 'react-router-dom'
import {firestore} from "../firebase"

const ItemListContainer = ({products}) => {

    const {categoryId} = useParams();
    const [list, setList] = useState([]);  

    useEffect(() => {

        if(categoryId){

            const db = firestore
            const collection = db.collection('products')
            const query = collection.where('category',"==",categoryId).get()
            query
                .then((result) => {
                    setList(result.docs.map(p => ({id: p.id, ...p.data()})))
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            if(products) {
                setList(products)
            }
        }

        

    }, [categoryId, products])

        if(list.length > 0) {
            return(
                <div className="p-4 h-full bg-gray-100">  
                    {
                        <ItemList list={ list } />
                    }  
                </div>
            ) 
        } else {
            return(
                <Spinner />
            )
        }


}

export default ItemListContainer
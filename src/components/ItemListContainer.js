import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import Spinner from './Spinner'
import { firestore } from '../firebase'
import {useParams} from 'react-router-dom'

const ItemListContainer = ({products}) => {

    const {categoryId} = useParams();
    console.log(categoryId)

    const [list, setList] = useState([]);  

    useEffect(() => {
        if(categoryId){
            const category = products.filter(p => p.category === categoryId)
            setList(category)
        }
        else{
            setList(products)
        }
        }, [categoryId, products])

    if(list.length > 0) {
        if(categoryId !== undefined) {
            return(
                <div className="m-4">  
                    {
                        <ItemList list={ list } />
                    }  
                </div>
            ) 
        }       
    } else {
        return(
            <Spinner />
        )
    }

}

export default ItemListContainer
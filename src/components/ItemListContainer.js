import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import Spinner from './Spinner'
import puntehbmochi1 from '../images/puntehb-mochi1.jpeg'
import puntehbmochi2 from '../images/puntehb-mochi2.jpeg'
import puntehbmochi3 from '../images/puntehb-mochi3.jpeg'
import puntehbrino1 from '../images/puntehb-rino1.jpeg'
import puntehbrino2 from '../images/puntehb-rino2.jpeg'
import puntehbrino3 from '../images/puntehb-rino3.jpeg'
import puntehbmatera1 from '../images/puntehb-matera1.jpeg'
import puntehbmatera2 from '../images/puntehb-matera2.jpeg'
import puntehbmatera3 from '../images/puntehb-matera3.jpeg'
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {

    const {categoryId} = useParams();
    console.log(categoryId)

    const [list, setList] = useState([]);  // estado inicial array vacío

    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {

            setTimeout(() => {

                let promiseOK = true;  // para simular estados finales, fullfilled/rejected, de la promesa
                const productsList = [
                    {
                        id: 1,
                        title: "Mochi1 - PunteHB",
                        category:'mochilas',
                        description: "bla bla bla",
                        price: 1000,
                        pictureUrl: puntehbmochi1
                    },
                    {
                        id: 2,
                        title: "Mochi2 - PunteHB",
                        category:'mochilas',
                        description: "bla bla bla",
                        price: 1200,
                        pictureUrl: puntehbmochi2
                    },
                    {
                        id: 3,
                        title: "Mochi3 - PunteHB",
                        category:'mochilas',
                        description: "bla bla bla",
                        price: 1500,
                        pictureUrl: puntehbmochi3
                    },
                    {
                        id: 4,
                        title: "Rino1 - PunteHB",
                        category:'rinoneras',
                        description: "bla bla bla",
                        price: 800,
                        pictureUrl: puntehbrino1
                    },
                    {
                        id: 5,
                        title: "Rino2 - PunteHB",
                        category:'rinoneras',
                        description: "bla bla bla",
                        price: 850,
                        pictureUrl: puntehbrino2
                    },
                    {
                        id: 6,
                        title: "Rino3 - PunteHB",
                        category:'rinoneras',
                        description: "bla bla bla",
                        price: 8500,
                        pictureUrl: puntehbrino3
                    },
                    {
                        id: 7,
                        title: "Matera1 - PunteHB",
                        category:'materas',
                        description: "bla bla bla",
                        price: 1400,
                        pictureUrl: puntehbmatera1
                    },
                    {
                        id: 8,
                        title: "Matera2 - PunteHB",
                        category:'materas',
                        description: "bla bla bla",
                        price: 1500,
                        pictureUrl: puntehbmatera2
                    },
                    {
                        id: 9,
                        title: "Matera3 - PunteHB",
                        category:'materas',
                        description: "bla bla bla",
                        price: 1500,
                        pictureUrl: puntehbmatera3
                    }
                ]

                promiseOK ? resolve(productsList) : reject("[ItemListContainer] Error al cargar los productos");

            }, 2000);
        });

        promesa
            .then(listaProductos => {
                setList(listaProductos);
                console.log("[ItemListContainer] - promesa fullfilled")
            })
            .catch(error => console.log(error))
    }, [])  // este efecto se ejecutara una única vez, dsp del render inicial

    if(list.length > 0) {
        if(categoryId !== undefined) {
            return(
                <div className="m-4">  
                    {
                        <ItemList list={ list.filter(p => p.category === categoryId) } />
                    }  
                </div>
            ) 
        } else {
            return(
                <div className="m-4">    
                    <ItemList list={list} />
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
import React, { useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'
import puntehbmochi1 from '../images/puntehb-mochi1.jpeg'
import puntehbmochi2 from '../images/puntehb-mochi2.jpeg'
import puntehbmochi3 from '../images/puntehb-mochi3.jpeg'
import puntehbrino1 from '../images/puntehb-rino1.jpeg'
import puntehbrino2 from '../images/puntehb-rino2.jpeg'
import puntehbrino3 from '../images/puntehb-rino3.jpeg'
import puntehbmatera1 from '../images/puntehb-matera1.jpeg'
import puntehbmatera2 from '../images/puntehb-matera2.jpeg'
import puntehbmatera3 from '../images/puntehb-matera3.jpeg'

const ItemDetailContainer = () => {

    const [item, setItem ] = useState([]);

    const {id} = useParams()

    useEffect(() => {

        const itemsPromesa = new Promise((resolve,reject)=>{

            let promesaOK = true;
    
            setTimeout(()=> {
     
                const productsList = [
                    {
                        id: 1,
                        title: "Mochi1 - PunteHB",
                        description: "bla bla bla",
                        detail:'Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.',
                        initialStock:10,
                        price: 1000,
                        pictureUrl: puntehbmochi1
                    },
                    {
                        id: 2,
                        title: "Mochi2 - PunteHB",
                        description: "bla bla bla",
                        detail:'Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.',
                        initialStock:10,
                        price: 1200,
                        pictureUrl: puntehbmochi2
                    },
                    {
                        id: 3,
                        title: "Mochi3 - PunteHB",
                        description: "bla bla bla",
                        detail:'Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.',
                        initialStock:10,
                        price: 1500,
                        pictureUrl: puntehbmochi3
                    },
                    {
                        id: 4,
                        title: "Rino1 - PunteHB",
                        description: "bla bla bla",
                        detail:'Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.',
                        initialStock:10,
                        price: 800,
                        pictureUrl: puntehbrino1
                    },
                    {
                        id: 5,
                        title: "Rino2 - PunteHB",
                        description: "bla bla bla",
                        detail:'Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.',
                        initialStock:10,
                        price: 850,
                        pictureUrl: puntehbrino2
                    },
                    {
                        id: 6,
                        title: "Rino3 - PunteHB",
                        description: "bla bla bla",
                        detail:'Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.',
                        initialStock:10,
                        price: 8500,
                        pictureUrl: puntehbrino3
                    },
                    {
                        id: 7,
                        title: "Matera1 - PunteHB",
                        description: "bla bla bla",
                        detail:'Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.',
                        initialStock:10,
                        price: 1400,
                        pictureUrl: puntehbmatera1
                    },
                    {
                        id: 8,
                        title: "Matera2 - PunteHB",
                        description: "bla bla bla",
                        detail:'Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.',
                        initialStock:10,
                        price: 1500,
                        pictureUrl: puntehbmatera2
                    },
                    {
                        id: 9,
                        title: "Matera3 - PunteHB",
                        description: "bla bla bla",
                        detail:'Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.',
                        initialStock:10,
                        price: 1500,
                        pictureUrl: puntehbmatera3
                    }
                ] 
    
                promesaOK ? resolve(productsList) : reject("[itemDetailContainer] fallo promesa");
    
            }, 500);
        });

        itemsPromesa
            .then( items => {
                let theItem = items.filter(i => i.id == id)
                setItem(theItem)
            } 
            )
            .catch( error => console.log(error))
            
    }, [])

    return (      
        <div >
              <ItemDetail item={item} /> 
        </div>
    )
}

export default ItemDetailContainer

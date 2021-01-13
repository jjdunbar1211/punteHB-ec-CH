import React from 'react'
import Item from './Item'

const ItemList = ({ list }) => {
    return (
        <div className="grid grid-cols-3 gap-2">
            { list.map( item => <Item key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />) }
        </div>
    )
}

export default ItemList
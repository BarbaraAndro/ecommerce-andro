import React from 'react'
import ItemCount from './ItemCount'
import '../styles/cardDetail.css'

const ItemDetail = ({ detalle }) => {
    return (
        <div className='cardDetail'>
            <img src={detalle.img} alt={detalle.name} />                
            <h2>{detalle.name}</h2>
            <p>{detalle.description}</p>
            <h3>€{detalle.price}</h3>
            <p>Stock: {detalle.stock}</p>
            <ItemCount stock={detalle.stock}/>
        </div>
    )
}

export default ItemDetail
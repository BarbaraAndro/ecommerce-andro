import React from 'react'
import Item from './Item'
import '../styles/card.css'

const ItemList = ({ data }) => {
  return (
    <div className='contenedor'>
      {data.map((prod) => <Item key={prod.id} prod={prod} />)}
    </div>
  )
}

export default ItemList
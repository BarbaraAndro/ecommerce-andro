import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import '../styles/card.css'

const Item = ({ prod }) => {
  return (
    <div className='card'>
      <img className='card-img' src={prod.img} alt={prod.name} />
      <div className='card-body'>
        <h2>{prod.name}</h2>
        <p>€ {prod.price}</p>
        <Link to={`/item/${prod.id}`} className='btn btn-sumar'> Ver mas</Link>
      </div>
    </div>
  )
}

export default Item
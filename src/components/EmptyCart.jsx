import React from 'react'
import { MdErrorOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
import '../styles/emptyCart.css'
import '../styles/icon.css'

const EmptyCart = () => {
    return (
        <div className='emptyCart'>
            <h2>Tu carrito esta vacio!!</h2>
            <div className='message-icon'><MdErrorOutline /></div>
            <Link className='btn btn-sumar' to='/'> Ir a comprar</Link>
        </div>
    )
}

export default EmptyCart
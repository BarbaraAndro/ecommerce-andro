import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/error.css'
import '../styles/emptyCart.css'
import { MdErrorOutline } from 'react-icons/md'

const Error = () => {
  return (
    <div className='error'>
      <h2>Error de navegación</h2>
      <div className='message-icon'><MdErrorOutline /></div>
      <NavLink to='/'>
        <button className='btn btn-sumar'>Volver al inicio</button>
      </NavLink>
    </div>
  )
}

export default Error
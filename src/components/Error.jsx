import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/error.css'

const Error = () => {
  return (
    <div className='error'>
        <h2>Error de navegación</h2>
        <NavLink to='/'>
            <button className='btn btn-sumar'>Volver al inicio</button>
        </NavLink>
    </div>
  )
}

export default Error
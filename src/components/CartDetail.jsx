import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import '../styles/cartDetail.css'
import { ImCross } from 'react-icons/im'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const CartDetail = () => {
  const { cart, clear, cartTotal, removeItem } = useContext(CartContext)

  const preClear = () => {
    Swal.fire({
      icon: 'warning',
      title: '¿Esta seguro que deseas vaciar el carrito de compras?',
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#A67B5B',
      confirmButtonText: 'Vaciar carrito',
      confirmButtonColor: '#D8C3A5',
    }).then((result) => {
      if (result.isConfirmed) {
        clear()
      }
    })
  }
  return (
    <div className='CartContainer'>
      <h2>Tu carrito de compras</h2>
      {cart.map((prod) => (
        <div className='itemCartContainer' key={prod.id}>
          <div className='itemCart'>
            <img className='itemCart-img' src={prod.img} alt={prod.name} />
            <div className="itemCart-text">
            <h2>{prod.name}</h2>
            <h3>€{prod.price}</h3>
            <h3>Cantidad: {prod.quantity}</h3>
            </div>
            <h3>Subtotal: €{(prod.price * prod.quantity).toFixed(1)}</h3>
            <button className='btn btn-sumar' onClick={() => removeItem(prod.id)}><ImCross /></button>
          </div>
        </div>
      )
      )}
      <h2>Total a pagar: €{cartTotal().toFixed(1)}</h2>
      <div className='botones'>
        <button className='btn btn-restar' onClick={() => preClear()}>Vaciar carrito</button>
        <Link to='/checkout' className='btn btn-sumar'>Finalizar compra</Link>
      </div>
    </div>
  )
}

export default CartDetail
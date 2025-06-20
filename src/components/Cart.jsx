import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartDetail from './CartDetail'
import EmptyCart from './EmptyCart'

const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <>
            {cart.length ? <CartDetail /> : <EmptyCart />}
        </>
    )
}

export default Cart
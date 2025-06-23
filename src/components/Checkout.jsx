import { useContext, useState } from 'react'
import "../styles/cardDetail.css"
import "../styles/form.css"
import '../styles/emptyCart.css'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { FaRegCheckCircle } from 'react-icons/fa'
import { db } from '../service/firebase'
import { NavLink } from 'react-router-dom'
import Error from './Error'
import ValidateForm from './ValidateForm'

const CheckOut = () => {
    const [orderId, setOrderId] = useState('')
    const { cart, cartTotal, clear } = useContext(CartContext)

    const finalizarCompra = (formData) => {
        const copiaCart = cart
        let orden = {
            comprador: {
                name: formData.name,
                direction: formData.address,
                email: formData.email
            },
            compra: copiaCart,
            total: cartTotal(),
            date: serverTimestamp()
        }
        const ventas = collection(db, "ordenes")
        addDoc(ventas, orden)
            .then((res) => {
                setOrderId(res.id)
                clear()
            })
            .catch((err) => console.log('Error'))
    }

    if (cart.length || orderId) {
        return (
            <>
                {orderId ?
                    <div className='error'>
                        <h2>Muchas gracias por tu compra</h2>
                        <h3>Tu id es: {orderId} </h3>
                        <div className='message-icon'><FaRegCheckCircle /></div>
                        <NavLink to='/'>
                            <button className='btn btn-sumar'>Volver al inicio</button>
                        </NavLink>
                    </div> :
                    <ValidateForm finalizarCompra={finalizarCompra} />
                }
            </>
        )
    } else {
        return (
            <div>
                <Error />
            </div>
        )
    }
}

export default CheckOut

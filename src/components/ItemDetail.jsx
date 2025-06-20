import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import '../styles/cardDetail.css'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({ detalle }) => {
    const { addItem, itemQuantity } = useContext(CartContext)
    const [compra, setCompra] = useState(false)

    const onAdd = (cantidad) => {
        setCompra(true)
        addItem(detalle, cantidad)
        Swal.fire({
            toast: true,
            icon: 'success',
            iconColor: '#74ACDF',
            title: 'Has agregado un producto al carrito!!',
            position: "top-end",
            timer: 3000,
        })

    }
    const stockActualizado = detalle.stock - itemQuantity(detalle.id)
    return (
        <div className='cardDetail'>
            <img src={detalle.img} alt={detalle.name} />
            <h2>{detalle.name}</h2>
            <p>{detalle.description}</p>
            <h3>€{detalle.price}</h3>
            <p>Stock: {stockActualizado}</p>
            {compra ?
                <div>
                    <Link to={'/'} className='btn btn-sumar'>Ver mas productos</Link>
                    <Link to={'/cart'} className='btn btn-sumar'> Ir al carrito</Link>
                </div> :
                <ItemCount stock={stockActualizado} onAdd={onAdd} />}
        </div>
    )
}

export default ItemDetail
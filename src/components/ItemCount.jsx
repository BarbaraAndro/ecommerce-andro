import { useState } from 'react'
import "../styles/btn.css"
import "../styles/itemCount.css"
import { Link } from 'react-router-dom'

const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(1)
    const restar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <> {stock === 0
            ? <>
                <p>Lo sentimos, no hay stock de este producto</p>
                <div>
                    <Link to={'/'} className='btn btn-sumar'>Ver mas productos</Link>
                    <Link to={'/cart'} className='btn btn-sumar'> Ir al carrito</Link>
                </div>
            </>
            : <div className='itemCount'>
                <div>
                    <button className='btn btn-restar' onClick={restar}>-</button>
                    <span className='number'>{count}</span>
                    <button className='btn btn-sumar' onClick={sumar}>+</button>
                </div>
                <button className='btn btn-sumar' onClick={() => { onAdd(count) }} disabled={count === 0}>Agregar al carrito</button>
            </div>}
        </>
    )
}

export default ItemCount
import {useState} from 'react'
import "../styles/btn.css"
import "../styles/itemCount.css"

const ItemCount = ({stock}) => {
    
    const [count, setCount]= useState(1)
    const restar = () => {
        if (count>1){
            setCount(count-1)
        }
    }
    const sumar = () => {
        if (count<stock) {
            setCount(count+1)
        }
    }

    return (
        <div className='itemCount'>
            <div>
                <button className='btn btn-restar' onClick={restar}>-</button>
                <span className='number'>{count}</span>
                <button className='btn btn-sumar' onClick={sumar}>+</button>
            </div>
            <button className='btn btn-sumar'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
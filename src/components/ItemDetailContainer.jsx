import React, { useEffect, useState } from 'react'
import { getProducts } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { SlRefresh } from "react-icons/sl";
import '../styles/icon.css'


const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const { itemId } = useParams()

    useEffect(() => {
        getProducts(itemId)
            .then((response) => setDetalle(response.find((item)=> item.id === itemId)))
            .catch((error) => console.log(error))
    }, [])

    return (
        // <div style={{ display: 'flex', justifyContent: 'center' }}><ItemDetail detalle={detalle} /></div>
        // <div style={{ display: 'flex', justifyContent: 'center' }}>{detalle.id && <ItemDetail detalle={detalle} />}</div>
        // <div style={{ display: 'flex', justifyContent: 'center' }}>{detalle.id ? <ItemDetail detalle={detalle}/> : <h2>Cargando producto</h2>}</div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>{detalle.id ? <ItemDetail detalle={detalle}/> : <SlRefresh className='icon'/>}</div>

        


    )
}

export default ItemDetailContainer
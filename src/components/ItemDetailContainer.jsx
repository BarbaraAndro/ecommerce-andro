import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import { doc, getDoc, collection } from 'firebase/firestore'
import { db } from '../service/firebase'
import Error from './Error'
import '../styles/cardDetail.css'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const { itemId } = useParams()
    const [loading, setLoading] = useState(false)
    const [invalid, setInvalid] = useState(false)

    useEffect(() => {
        setLoading(true)
        const productCollection = collection(db, "products")
        const docRef = doc(productCollection, itemId)
        getDoc(docRef)
            .then((res) => {
                if (res.data()) {
                    setDetalle({ ...res.data(), id: res.id })
                } else {
                    setInvalid(true)
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    if (invalid) {
        return (
            <Error />
        )
    }

    return (
        <div>
            {loading ? <Loading /> : <div className='cardContainer'> <ItemDetail detalle={detalle} /></div>}
        </div>
    )
}

export default ItemDetailContainer
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([])
    const { categoryId } = useParams()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const productsCollection = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)): collection(db, "products")
        getDocs(productsCollection)
            .then((res) => {
                const list = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setData(list)
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {loading ?
                <Loading /> :
                <div>
                    <h1>{greeting}{categoryId && <span>{categoryId}</span>} </h1>
                    <ItemList data={data} />
                </div>}
        </div>
    )
}

export default ItemListContainer
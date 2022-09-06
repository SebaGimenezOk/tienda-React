

import { useState, useEffect } from "react"
import ItemList from "../ItemList/Itemlist"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"
import './ItemListContainer.scss'


const ItemListContainer = () => {

    const [lista, setLista] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {

        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'Productos')
        const queryFiltro = query(queryCollection, where('category', '==', categoryId))

        if (categoryId) {
            getDocs(queryFiltro)
                .then(res => setLista(res.docs.map(product => ({ id: product.id, ...product.data() }))))

        } else {
            getDocs(queryCollection)
                .then(res => setLista(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }
    }, [categoryId])

    return (
        <div className="contenedorLista">
            <h1 className="titulosybotones">lista productos</h1>
            <ItemList infoproductos={lista} />
        </div>
    )
}
export default ItemListContainer;


import { useState, useEffect } from "react"
import ItemList from "../ItemList/Itemlist"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"
import './ItemListContainer.scss'


const ItemListContainer = () => {

    const [lista, newLista] = useState([])
    const { productoId } = useParams()
    useEffect(() => {

        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'Productos')

        if (productoId) {
            const queryFiltro = query(queryCollection, where('category', '==', 'productoId'))
            getDocs(queryFiltro)
                .then(res => newLista(res.docs.map(product => ({ id: product.id, ...product.data() }))))

        } else {
            getDocs(queryCollection)
                .then(res => newLista(res.docs.map(product => ({ id: product.id, ...product.data() }))))

        }

    }, [productoId])

    return (
        <div className="contenedorLista">
                    <h1 className="titulosybotones">lista productos</h1>
                    <ItemList infoproductos={lista} />
        </div>
    )
}
export default ItemListContainer;
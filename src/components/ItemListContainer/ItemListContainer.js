

import { useState, useEffect } from "react"
import ItemList from "../ItemList/Itemlist"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import './ItemListContainer.scss'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [lista, setLista] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'Productos')
        if (categoryId) {
            const queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then(
                    res => setLista(res.docs.map(producto => ({ id: producto.id, ...producto.data() })))
                )
        } else {
            getDocs(queryCollection)
                .then(
                    res => setLista(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
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
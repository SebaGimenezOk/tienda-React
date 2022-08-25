

import ItemDetail from "../ItemDetail/ItemDetail.js"
import { useEffect, useState } from "react";
// import products from "../../utils/products.mock.js"
import './ItemDetailContainer.scss'
import { useParams } from "react-router-dom";

import { getFirestore, doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const { productoId } = useParams()

    // useEffect(() => {
    //     const getDetalle = new Promise(resolve => {
    //         resolve(products)
    //     })
    //     getDetalle.then(res => setDetalle(res.find(producto => producto.id === parseInt(productodId))))
    // },)


    useEffect(() => {
        const querydb = getFirestore()
        const queryDoc = doc(querydb, 'Productos', productoId)
        getDoc(queryDoc)
            .then(res => setDetalle({ id: res.id, ...res.data() }))
    },[productoId])

    return (
        <div className="list-products">
            <h2 className="titulodeseccion">Producto Seleccionado</h2>
            <ItemDetail infodetalle={detalle} />
        </div>
    )
}
export default ItemDetailContainer
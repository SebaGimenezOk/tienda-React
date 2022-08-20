

import ItemDetail from "../ItemDetail/ItemDetail.js"
import { useEffect, useState } from "react";
import products from "../../utils/products.mock.js"
import './ItemDetailContainer.scss'
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const { productodId } = useParams()

    useEffect(() => {

        const getDetalle = new Promise(resolve => {
            resolve(products)
        })

        getDetalle.then(res => setDetalle(res.find(producto => producto.id === parseInt(productodId))))


    },)


    return (
        <div className="list-products">
            <h2 className="titulodeseccion">Producto Seleccionado</h2>
            <ItemDetail infodetalle={detalle} />
        </div>
    )
}
export default ItemDetailContainer
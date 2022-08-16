

import ItemDetail from "../ItemDetail/ItemDetail.js"
import { useEffect, useState } from "react";
import products from "../../utils/products.mock.js"
import './ItemDetailContainer.scss'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [productDataDetail, setproductDataDetail]= useState({})
    const { id } = useParams()

    useEffect(() => {
        filterById()
    },)
  const filterById = () => {

        products.some((product) => {
            if (product.id === id) {
                console.log("filtrado en numero: ", product)
                setproductDataDetail(product)
            }
        })
    }

    return (
        <div className="list-products">
            <h2 className="titulodeseccion">Producto Seleccionado</h2>
            <ItemDetail data={productDataDetail}/>
        </div>
    )
}
export default ItemDetailContainer
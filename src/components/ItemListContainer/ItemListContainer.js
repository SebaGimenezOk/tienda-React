
import "./ItemListContainer.scss"
import products from "../../utils/products.mock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/Itemlist"


const ItemListContainer = () => {

    const [lista, newLista] = useState([])

    useEffect(() => {

        const getProducts = new Promise(resolve => {
            resolve(products)
        })
        getProducts
            .then((res) => {
                newLista(res)
            })
            .catch((error) => {
                console.log("error")
            })
    }, [])

    return (
        <div className="lista-home">
            <h1 className="titulosybotones">lista productos</h1>
            <ItemList infoproductos={lista} />
        </div>
    )
}
export default ItemListContainer;
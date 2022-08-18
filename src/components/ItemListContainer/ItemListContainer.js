
import "./ItemListContainer.scss"
import products from "../../utils/products.mock"
import { useState, useEffect } from "react"
import ItemProduct from "../ItemProduct/ItemProduct"


const ItemListContainer = ({ section }) => {

    const [lista, newLista] = useState([])

    useEffect(() => {

        const getProducts = new Promise((resolve, reject) => {
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
        <div className="main-container">
            <h2>{section}</h2>
            {lista.map((producto) => { return <ItemProduct data={lista} /> })}
        </div>
    )
}
export default ItemListContainer;
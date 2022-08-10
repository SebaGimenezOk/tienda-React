/* eslint-disable react-hooks/exhaustive-deps */

import products from "../../utils/products.mock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/Itemlist"



const ItemListContainer = ({ section }) => {


    const [listProducts, setListProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)

    })

    useEffect(() => {
        getProducts
            .then((res) => {
                setListProducts(res)
            })
            .catch((error) => {
                console.log("error")
            })

    }, [])




    return (
        <div className="list-products">
            <h2 className="titulos-container">{section}</h2>
            <ItemList dataProducts={listProducts} />
        </div>
    )
}
export default ItemListContainer;
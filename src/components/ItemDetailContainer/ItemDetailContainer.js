/* eslint-disable react-hooks/exhaustive-deps */
import "./ItemDetailContainer.scss"
import "../ItemDetail/ItemDetail.scss"
import products from "../../utils/articulo.mock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/Itemlist"



const ItemDetailContainer = ({ section }) => {


    const [listProducts, setListProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, )

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
            <h2>promociones</h2>
            <ItemList dataProducts={listProducts} />
        </div>
    )
}
export default ItemDetailContainer;
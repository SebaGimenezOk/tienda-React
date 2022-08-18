
import "./ItemListContainer.scss"
import products from "../../utils/products.mock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/Itemlist"




const ItemListContainer = ({ section }) => {
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            })
        }, 1000)
        getProducts
            .then((res) => {
                setListProducts(res)
            })
            .catch((error) => {
                console.log("error")
            })
    }, [])

   
    return (
        <div className="main-container">
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts} />
        </div>
    )
}
export default ItemListContainer;
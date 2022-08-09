
import products from "../../utils/products.mock"
import { useState } from "react"
import ItemList from "../ItemList/Itemlist"


const ItemListContainer = ({ section }) => {


    const [listProducts, setListProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        resolve(products)
    })

    getProducts
        .then((res) => {
            setListProducts(res)
        })
        .catch((error) => {
            console.log("error")
        })

    return (
        <div className="list-products">
            <h2 className="titulos-container">{section}</h2>
            <ItemList dataProducts={listProducts} />
        </div>
    )
}
export default ItemListContainer;

import "./ItemListContainer.scss"
import products from "../../utils/products.mock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/Itemlist"



const ItemListContainer = ({ section }) => {


    const [listProducts, setListProducts] = useState([]);

    const getProducts = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products)
        },)

    })

    useEffect(() => {
        getProducts
            .then((res) => {
                setListProducts(res)
            })
            .catch((error) => {
                console.log("error")
            })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])




    return (
        <div className="main-container">
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts} />
        </div>
    )
}
export default ItemListContainer;
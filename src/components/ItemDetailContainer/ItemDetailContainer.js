
import products from "../../utils/products.mock"
// import products from "../../utils/articulo.mock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/Itemlist"
import { useParams } from "react-router-dom"


const ItemListContainer = ({ section }) => {

    const { id, category } = useParams();
      console.log("category: ",category, "motrar id: ",id); 

    const [listProducts, setListProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        })

    }, 1000)

    useEffect(() => {
        getProducts
            .then((res) => {
                setListProducts(res)
            })
            .catch((error) => {
                console.log("error")
            })

    })




    return (
        <div>
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts} />
        </div>
    )
}
export default ItemListContainer;
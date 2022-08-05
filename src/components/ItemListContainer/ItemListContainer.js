import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import products from "../utils/products.mock"


const ItemListContainer = ({ section }) => {

    const [listProducts, setListProducts] = useState([])
    const { categoryName } = useParams();
    const filterCategory = products.filter((products) => products.category === categoryName)



    const getProducts = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryName === "Duros" || categoryName === "Blandos" || categoryName === "Estacionados") {
                resolve(filterCategory)
            }
            else {
                resolve(products)
            }
        }, 2000)
    })
    useEffect(() => {
        const getProduct = async () => {
            try{
                const responseLog = await getProducts()
                setListProducts(responseLog)


            }

            catch(error){ console.log(error) }
        }
        getProduct()
    }, )

return (
    <div className="item-container">
        <span className="titulo">{products}</span>
        <ItemList dataProducts={listProducts} />
    </div>
)

}
export default ItemListContainer;
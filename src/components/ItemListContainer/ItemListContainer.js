import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ products }) => {

    const [listProducts, setListProducts] = useState([])
    const { Category } = useParams();
    const filterCategory = products.filter((products) => products.category === Category)



    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Category === "duros" || Category === "blandos" || Category === "estacionados") {
                resolve(filterCategory)
            }
            else {
                resolve(products)
            }
        }, 2000)
    })

    useEffect(() => {
        getProduct
            .then((resol) => {
                setListProducts(resol)
            })
            .catch((error) => {
                console.log('errro')
            })
            .finally(() => {
                console.log('no seguir');
            })

    })

    return (
        <div className="item-container">
            <span className="titulo">{products}</span>
            <ItemList dataProducts={listProducts} />
        </div>
    )
}

export default ItemListContainer;
import './ItemDetailContainer.scss'
// import products from '../utils/products.mock'
import { useEffect, useState } from 'react'
// import ItemList from '../ItemList/ItemList'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({ section }) => {

    const [products, setProducts]=useState([]);


    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
    useEffect(() => {
        getProducts
            .then((res) => {
                setProducts(res)
            })
            .catch((error) => {
                console.log("error");
            })
            .finally(() => {
                console.log("listo..");
            })
    })
    return (
        <div className="">
            <ItemDetail datos={products}/>
        </div>
        );
    }
export default ItemDetailContainer;
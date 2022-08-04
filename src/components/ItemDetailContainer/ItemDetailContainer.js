import './ItemDetailContainer.scss'
import artic from '../utils/products.mock'
import { useEffect, useState } from 'react'
import ItemProduct from '../ItemProduct/ItemProduct'
// import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({ section }) => {

    const [products, setProducts]=useState([]);


    const traer = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
    useEffect(() => {
        traer
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
        <div className="item-container">
            <ItemProduct datos={artic[2]}/>
        </div>
        );
    }
export default ItemDetailContainer;
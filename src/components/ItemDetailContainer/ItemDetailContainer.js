import './ItemDetailContainer.scss'
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
            <ItemProduct datos={products[2]}/>
        </div>
        );
    }
export default ItemDetailContainer;
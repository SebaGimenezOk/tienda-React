import './ItemDetailContainer.scss'
import artic from '../utils/articulo.mock'
import { useEffect, useState } from 'react'
// import ItemList from '../ItemList/ItemList'
import ItemDetail from '../ItemDetail/ItemDetail'

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
            <ItemDetail datos={artic[2]}/>
        </div>
        );
    }
export default ItemDetailContainer;
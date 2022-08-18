

import ItemDetail from "../ItemDetail/ItemDetail.js"
import { useEffect, useState } from "react";
import products from "../../utils/products.mock.js"
import './ItemDetailContainer.scss'

const ItemDetailContainer = () => {
    const [detail,setDataDetail]=useState([])

     const getProducts=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
     })
     useEffect(()=>{
        getProducts
        .then((res)=>{setDataDetail(res)})
        .catch((error)=>{
            console.log("error")})
     },)
    return (
        <div className="list-products">
            <h2 className="titulodeseccion">Producto Seleccionado</h2>
            <ItemDetail data={detail}/>
        </div>
    )
}
export default ItemDetailContainer
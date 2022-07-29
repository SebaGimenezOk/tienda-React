import './ItemListContainer.scss'
import products from '../utils/products.mock'
import { useEffect,useState } from 'react'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ section }) => {

    const [listProducts, setListProducts] = useState([])


const getProducts = new Promise((resolve, reject) => {
    resolve(products)
})

useEffect(()=>{

    getProducts
    .then ((res)=>{
        setListProducts(res)
    })
    .catch((error)=>{
        console.log("error");
    })
    .finally(()=>{
    
    })


})




    return (
        <div className="item-container">
            <h1 className="titles">{section}</h1>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}
export default ItemListContainer;
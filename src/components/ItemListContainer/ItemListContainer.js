
import "./ItemListContainer.scss"
// import products from "../../utils/products.mock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/Itemlist"
import { getFirestore, collection, getDocs } from "firebase/firestore"


const ItemListContainer = () => {

    const [lista, newLista] = useState([])

    useEffect(() => {

        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'Productos')

        getDocs(queryCollection)
            .then(res => res.docs.map(Producto => ({ id: Producto.id, ...Producto.data() })))


        // const getProducts = new Promise(resolve => {
        //     resolve(products)
        // })
        // getProducts
        //     .then((res) => {
        //         newLista(res)
        //     })
        //     .catch((error) => {
        //         console.log("error")
        //     })
    }, [])

    return (
        <div className="lista-home">
            <h1 className="titulosybotones">lista productos</h1>
            <ItemList infoproductos={lista} />
        </div>
    )
}
export default ItemListContainer;
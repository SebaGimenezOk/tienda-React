

import ItemProduct from "../ItemProduct/ItemProduct";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";



const ItemList = ({ dataProducts }) => {
    const { handleClick } = useContext(CartContext)
    
    return (
        <>
            <button onClick={handleClick}> click</button>
            {dataProducts.map((products) => {
                return (
                    <>
                        <ItemProduct key={products.id} data={products} />
                    </>
                )
            })}
        </>
    )
}

export default ItemList; 
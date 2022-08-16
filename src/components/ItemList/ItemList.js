

import ItemProduct from "../ItemProduct/ItemProduct";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";



const ItemList = ({ dataProducts }) => {
    const { handleClick } = useContext(CartContext)
    // console.log("imfo del constext: ", name);
    return (
        <>
            <button onClick={handleClick}> click</button>
            {dataProducts.map((product) => {
                return (
                    <>
                        <ItemProduct key={product.id} data={product} />
                    </>
                )
            })}
        </>
    )
}

export default ItemList; 
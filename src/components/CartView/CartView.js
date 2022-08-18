
import React from "react";
import { useCartContext } from "../../components/CartContext/CartContext"
const CartView = ({ product }) => {
    const { removeProduct } = useCartContext()
    return (
        <div className="cart-view">
            <img src={product.img} alt={product.title} />
            <div>
                <p>producto:{product.title}</p>
                <p>cantidad:{product.quantity}</p>
                <p>price:{product.price}</p>
                <p>subTotal:{product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar </button>



            </div>



        </div>
    )
}
export default CartView;
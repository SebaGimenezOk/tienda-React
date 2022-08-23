
import React from "react";
import { useCartContext } from "../../components/CartContext/CartContext"
import './CartView.scss'


const CartView = ({ producto }) => {

    const { removeProduct } = useCartContext()
    const { title, img, price, quantity, id } = producto

    
    return (
        <div className="cart-view">
            <img src={img} alt={title} />
            <div>
                <p>producto:{title}</p>
                <p>cantidad:{quantity}</p>
                <p>price:{price}</p>
                <p>subTotal:{quantity * price}</p>
                <button onClick={() => removeProduct(id)}>Eliminar </button>
            </div>
        </div>
    )
}
export default CartView;

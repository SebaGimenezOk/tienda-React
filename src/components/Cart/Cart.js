import React from "react";
import './Cart.scss'
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";


const Cart = () => {

    const { carroProd, precioTotal } = useCartContext();

    if (carroProd.length === 0) {
        return (
            <>
                <p className="tituloDetalle"> No hay elementos en el carrito</p>
                <Link to='/' className="tituloLink"> Compra algo</Link>
            </>
        )
    }
    return (
        <>
        <div className="itemFinal">{
            carroProd.map(producto => <ItemCart key={producto.id} producto={producto} />)
        }
        </div>
            <p>
                <p className="tituloDetalle">total: $ {precioTotal()}</p>
                <Link to='/Contact' className="tituloLink"> Pagar</Link>
            </p>

        </>
    )

}
export default Cart
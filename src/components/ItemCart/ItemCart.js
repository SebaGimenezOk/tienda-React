import React from "react"
import { useCartContext } from "../../Context/CartContext"
import './ItemCart.scss'
import { Link } from "react-router-dom"

const ItemCart = ({ producto }) => {
    const { removeProducto } = useCartContext()
    const { title, price, img, id, quantity } = producto
    return (
        <>
            <div className="itemCart">
                <img src={`/assets/${img}`} alt={title} />
                <p> Producto:  {title} </p>
                <p> Cantidad:   {quantity} unidades </p>
                <p> Precio Unitario: $  {price} </p>
                <p> subtotal:  $  {quantity * price} </p>
                <button className="tituloEliminar" onClick={() => removeProducto(id)} > Eliminar  </button>
                <Link to='/' className="tituloAgrega"> agregar mas productos</Link>
            </div>
        </>
    )

}
export default ItemCart
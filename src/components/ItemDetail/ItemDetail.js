import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import "./ItemDetail.scss"
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"

const ItemDetail = ({ infodetalle }) => {

    const [goToCart, setGoToCart] = useState(false)

    const { addProducto } = useCartContext()

    const onAdd = (quantity) => {
        setGoToCart(true)
        addProducto(infodetalle, quantity)
    }
    const { title, price, img, stock, id, description } = infodetalle

    return (

        <Link to={`/Products/${id}`}>
            <div className="item-product">
                <img className="caja-foto" src={`/assets/${img}`} alt="Imagen producto" />
                <div className="titulo-detail">
                    <h1 className="tituloDetalle">Producto:  {title}</h1>
                    <span className="precioDetalle">$: {price}  arg   </span>
                    <p className="tituloStock">Stock: {stock} unidades</p>
                    <p> descripcion:   <p className="textoDescription"> {description}</p></p>

                </div>
                <div className="item-number">
                    {
                        goToCart ? <Link className="item-numbers" to="/Cart">Ir al Carrito</Link>
                            : <ItemCount initial={0} stock={20} onAdd={onAdd} />
                    }

                </div>
                <Link to='/' className="tituloAgrega"> agregar mas productos</Link>
            </div>

        </Link>
    )
}
export default ItemDetail;
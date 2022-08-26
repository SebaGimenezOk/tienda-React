import './Item.scss'
import { Link } from "react-router-dom";

const Item= ({ data }) => {

    const {title, price, img, stock, id,}= data;
    return (
        <Link className="tituloAgrega" to={`/Products/${id}`}>
        <div className="tarjetaProducto">
            <img className="caja-foto" src={`/assets/${img}`} alt="Imagen producto" />
            <div className="titulosybotones">
                <p>{title}</p>
                <span>$ {price}</span>
                <p>stock: {stock}</p>
                <Link className="tituloAgrega" to={`/Products/${id}`}> <p>Ver Mas</p></Link>
            </div>
        </div>
        </Link>
    )
}
export default Item;
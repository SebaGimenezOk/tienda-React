import './Item.scss'
import { Link } from "react-router-dom";

const Item= ({ data }) => {

    const {title, price, img, stock, id, category}= data;
    return (
        <Link className="tituloAgrega" to={`/Products/${id}`}>
        <div className="tarjetaProducto">
            <img className="caja-foto" src={`/assets/${img}`} alt="Imagen producto" />
            <div className="titulosybotones">
                <p>{title}</p>
                <p className="tituloStock">Categoria: {category}</p>
               
                <span>$ {price}</span>
              
                <p className="tituloStock">stock: {stock} unidades</p>
                <p>Ver Mas</p>

            </div>
        </div>
        </Link>
    )
}
export default Item;
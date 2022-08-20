
import "./ItemDetail.scss"
import { Link } from "react-router-dom"

const ItemDetail = ({infodetalle}) => {
    
    const {title, price, img, stock, id, description}= infodetalle
    
    return (
        
        <Link to={`/Products/${id}`}> 
        <div className="tarjetaProducto">
            <img className="caja-foto" src={`/assets/${img}`} alt="Imagen producto" />
            <div className="titulosybotones">
                <p>{title}</p>
                <span>${price}</span>
                <p>stock:{stock}</p>
                <p> description:{description}</p>
            </div>
        </div>
        </Link>
    )
}
export default ItemDetail;
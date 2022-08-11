import ItemCount from "../ItemCount/ItemCount";
import "./ItemProduct.scss"
import { Link } from "react-router-dom";


const ItemProduct = ({ data }) => {

    const {title, price, img, stock, id}= data;
    return (
        <Link to={`/Products/${id}`}> 
        <div className="item-product">
            <img className="caja-foto" src={`/assets/${img}`} alt="Imagen producto" />
            <div className="titulosybotones">
                <p>{title}</p>
                <span>${price}</span>
                <p>stock:  {stock}</p>
                <ItemCount />
            </div>
        </div>
        </Link>
    )
}
export default ItemProduct;
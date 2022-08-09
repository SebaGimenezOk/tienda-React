import ItemCount from "../ItemCount/ItemCount";
import "./ItemProduct.scss"



const ItemProduct = ({ data }) => {

    const {title, price, img, stock}= data;
    return (
        <div className="item-product">
            <img className="caja-foto" src={`/assets/${img}`} alt="Imagen producto" />
            <div className="titulosybotones">
                <p>{title}</p>
                <span>${price}</span>
                <p>stock:  {stock}</p>
                <ItemCount />
            </div>
        </div>
    )
}
export default ItemProduct;
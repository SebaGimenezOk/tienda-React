import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss"
import { useState } from "react";


const ItemDetail = ({ data }) => {
    const [quantitySelected, setQuantitySelected] = useState(1)

    const { title, price, img, stock, description } = data;




    return (
        <div className="item-product">
            <img className="caja-foto" src={`/assets/${img}`} alt="Imagen producto" />
            <div className="bloque-uno">
                <p className="titulos-detail">{title}</p>
                <p className="price">$  {price}   arg.</p>
                <p className="stock">stock: {stock} unidades.</p>
                <p className="descript"> description:   {description}</p>
            </div>
            {console.log("quantitySelected: ", quantitySelected)}
            {quantitySelected > 1 ? <button> terminar compra</button> : <ItemCount setQuantitySelected={setQuantitySelected} />}
        </div>
    )
}
export default ItemDetail;
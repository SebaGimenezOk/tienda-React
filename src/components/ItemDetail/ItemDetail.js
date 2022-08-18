
import "./ItemDetail.scss"
// import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({data}) => {
    const {title, price, img, stock, description}= data;
    
    // const onAdd = (countQuantity) => {
    //     console.log(`compraste${countQuantity}units`);
    // }
    return (
       <Link>
        <div className="item-product">
            <img className='caja-foto' src={`/assets/${img}`} alt="img prod" />
            <div className="titulosybotones">
                <p className='titulosybotones' >{title} </p>
                <p className='titulosybotones2'>$: {price}</p>
                <p className='titulosybotones'>Stock:{stock} </p>
                <p className='descript' >description:  {description} </p>
                {/* <ItemCount initial={0} stock={20} onAdd={onAdd} /> */}
            </div>
        </div>
       
       </Link>
    )
}
export default ItemDetail;
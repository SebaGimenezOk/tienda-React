import './ItemProduct.scss'

const ItemProduct = ({title,price,img}) => {
    
    return (
        <div className="Item-Product">
            <img className ="caja-foto"  src={`./assets/${img}`} alt="imagen producto" />
            <p className="P-Products">{title}</p>
            <span className='P-Precios'> $ {price} </span>
            <button> COMPRAR </button>
        </div>

    );
}
export default ItemProduct;
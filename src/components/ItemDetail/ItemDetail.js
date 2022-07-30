import './ItemDetail.scss'
import Card from 'react-bootstrap/Card';



function ItemDetail({ datos,action }) {
    const { title, price, img, stock } = datos;

    return (
        <Card className="Item-Product" >
            <img className="caja-foto" src={img} alt="imagen producto" />
            <p className="P-Products">{title}</p>
            <span className='P-Precios'>{price} </span>
            <p className='P-Precios' > en stock: {stock} </p>
            {/* <ItemCount/> */}
            <button onClick={action}> COMPRAR </button>
        </Card>
    );
}

export default ItemDetail;

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./Item.scss";
// import products from '../utils/products.mock'

function Item({ datos, action }) {
    const { title, price, img, stock } = datos;

    return (
        <Card className="Item-Product" >
            <img className="caja-foto" src={img} alt="imagen producto" />
            <p className="P-Products">{title}</p>
            <span className='P-Precios'>{price} </span>

            <p className='P-Precios' > en stock: {stock} </p>
            <button onClick={action}> COMPRAR </button>
        </Card>
    );
}

export default Item;
import './ItemDetail.scss'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import React from 'react';





function ItemDetail({ datos,}) {
    const { title, price, img, stock, description } = datos;

    return (
        <Card>
            <div className='Hero-Container'>
                <div className='Item-Uno'>
                    <img className="caja-foto" src={`./assets/${img}`} alt="imagen producto" />
                    <div className=''>
                        <p className="P-Products">{title}</p>
                        <span className='P-Precios'>por kilo: $ {price}</span>
                    </div>
                </div>
                <div className='Item-Dos'>
                    <p> {description} </p>
                    <p className='P-Precios'> en stock: {stock} </p>
                    <ItemCount />
                </div>
            </div>
        </Card>
    );
}
export default ItemDetail;
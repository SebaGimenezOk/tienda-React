import React from 'react';
import './ItemProduct.scss'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';


const ItemProduct = ({data}) => {

    const { title, img, price, stock, category,description,id } = data;
    return (
        <div className="Item-Product">
            <Link to={`/${category}/${id}`}>
            <img className="caja-foto" src={`./assets/${img}`} alt="imagen producto" />
            <p className="P-Products">{title}</p>
            <span className='P-Precios'> ${price} </span>
            <p className='P-Texto'>{description}</p>
           <ItemCount stock={stock}></ItemCount>
            </Link>
        </div>
    );
};
export default ItemProduct;
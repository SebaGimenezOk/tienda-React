
import { useState, useEffect } from 'react'
import './ItemProduct.scss'

const ItemProduct = ({ data, action }) => {
    const [contador, setContador] = useState(2)

    const { title, img, price } = data;

    const addNumber = () => {
        setContador(contador + 1)
    }
    const removeNumber = () => {
        setContador(contador - 1)
    }

    useEffect(() => {
        console.log("");
    }, [contador]

    )


    return (
        <div className="Item-Product">
            <img className="caja-foto" src={`./assets/${img}`} alt="imagen producto" />
            <p className="P-Products">{title}</p>
            <span className='P-Precios'> $ {price} </span>
            <div className="countProd">
                <button onClick={addNumber} >+</button>
                <p className='P-Precios'>{contador}</p>
                <button onClick={removeNumber}>-</button>
            </div>
            <button onClick={action}> COMPRAR </button>
        </div>

    )
}
export default ItemProduct;
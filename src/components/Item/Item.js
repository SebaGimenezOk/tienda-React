
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react'


function Item({ datos,action }) {
    const { title, price, img, stock } = datos;

    const [contador, setContador] = useState(1)

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
        <Card className="Item-Product" >
            <img className="caja-foto" src={`./assets/${img}`} alt="imagen producto" />
            <p className="P-Products">{title}</p>
            <span className='P-Precios'> ${price} </span>
            <div className="countProd">
                <button onClick={removeNumber} >-</button>
                <p className='P-Precios'>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <p> en stock: {stock} </p>
            <button onClick={action}> COMPRAR </button>
        </Card>
    );
}

export default Item;
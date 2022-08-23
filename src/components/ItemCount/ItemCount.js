import { useEffect, useState}from "react"
import "./ItemCount.scss"
import React from "react"



const ItemCount = ({ initial, stock,onAdd}) => {


    const [countQuantity, setCountQuantity] = useState(parseInt(initial))

    const addQuantity = () => {
        setCountQuantity(countQuantity + 1)
    }

    const removeQuantity = () => {
        setCountQuantity(countQuantity - 1)
    }
useEffect(()=>{
    setCountQuantity(parseInt(initial));
}, [initial])





    return (
        <>
            <div className="item-carro">
                <div className="item-number">
                    <button disabled={countQuantity <= 1} onClick={removeQuantity} > - </button>
                    <span>{countQuantity}</span>
                    <button disabled={countQuantity >= stock} onClick={addQuantity}> +</button>
                </div>
                <button className="titulo-agregar" disabled={stock <= 0} onClick={() => onAdd(countQuantity)}> Agregar al Carrito</button>
            </div>
        </>
    )

}
export default ItemCount;
import { useState } from "react"
import "./ItemCount.scss"

const ItemCount = ({ setQuantitySelected }) => {

    const [countQuantity, setCountQuantity] = useState(0)

    const addQuantity = () => {
        setCountQuantity(countQuantity + 1)
    }

    const removeQuantity = () => {
        setCountQuantity(countQuantity - 1)
    }
    const onAdd = () => {
        setQuantitySelected(countQuantity)
    }



    return (
        <>
            <div className="count-prod">
                <button onClick={removeQuantity} > - </button>
                <span>{countQuantity}</span>
                <button onClick={addQuantity}> +</button>
            </div>
            <button className="titulosybotones3" onClick={onAdd}> Agregar al Carrito</button>
        </>
    )

}
export default ItemCount;
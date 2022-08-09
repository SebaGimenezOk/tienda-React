import { useState } from "react"
import "./ItemCount.scss"

const ItemCount = () => {
    const [contador, setContador] = useState(0)

    const addNumber = () => {
        setContador(contador + 1)
    }

    const removeNumber = () => {
        setContador(contador - 1)
    }

    return (
        <>
            <div className="count-prod">
                <button onClick={removeNumber} > - </button>
                <p>{contador}</p>
                <button onClick={addNumber}> +</button>
            </div>
            <button className="titulosybotones2"> Comprar</button>
        </>
    )

}
export default ItemCount;
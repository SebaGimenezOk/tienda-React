import React, { useState, action } from "react";
import "./ItemCount.scss";



const ItemCount = ({ stock }) => {
    const [cantidad, setCantidad] = useState(1);

    function onAdd(signo) {
        if (signo === "-") {
            if (cantidad > 1) {
                setCantidad(cantidad - 1);
            }
        } else if (signo === "+") {
            if (cantidad < stock) {
                setCantidad(cantidad + 1);
            }
        }
    }
    return (
        <>
            
            <div className="countProd">
                <div>
                    <button onClick={() => onAdd("-")}>
                        -
                    </button>
                </div>
                <div className="P-Precios">{cantidad}</div>
                <div>
                    <button onClick={() => onAdd("+")}>
                        +
                    </button>
                </div>
            </div>
            <button onClick={action}> COMPRAR </button>

        </>
    );
};

export default ItemCount;

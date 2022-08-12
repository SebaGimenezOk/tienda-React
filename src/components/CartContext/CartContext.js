import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [name, setName] = useState("sebas")
   
    const handleClick=()=>{
        console.log("funcion desde contexT");
    }
    const data ={name, setName, handleClick}


    return (
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;

export {CartContext}
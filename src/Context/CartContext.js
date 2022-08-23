import { createContext } from "react";
import { useState, useContext } from "react";



export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)




const CartProvider = ({ children }) => {

    const [carroProd, setCarroProd] = useState([])

    const addProducto = (infodetalle, quantity) => {

        if (inCarro(infodetalle.id)) {
            setCarroProd(carroProd.map(producto => {
                return producto.id === infodetalle.id ? { ...producto, quantity: producto.quantity + quantity } : producto
            }))
        } else {
            setCarroProd([...carroProd, { ...infodetalle, quantity }])
        }

    }

    const limpiarCarro = () => setCarroProd([])

    const inCarro = (id) => carroProd.find(producto => producto.id === id) ? true : false;

    const removeProducto = (id) => setCarroProd(carroProd.filter(producto => producto.id !== id))


    const precioTotal = () => {
        return carroProd.reduce((previo, actual) => previo + actual.quantity * actual.price, 0)
    }
    const productosTotal = () => carroProd.reduce((acumulado, productoActual) => acumulado + productoActual.quantity, 0)


    return (
        <CartContext.Provider value={{
            limpiarCarro,
            inCarro,
            removeProducto,
            addProducto,
            precioTotal,
            productosTotal,
            carroProd
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;



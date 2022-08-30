import React from "react";
import './Cart.scss'
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const Cart = () => {

    const { carroProd, precioTotal } = useCartContext();

    const Orden = {
        buyer: {
            name: 'juan',
            email: 'juan@hotmail.com',
            phone: '344545332',
            adress: 'san martin 123'
        },
        items: carroProd.map(producto => ({ id: producto.id, title: producto.title, price: producto.price, quantity: producto.quantity })),
        total: precioTotal(),
    }

    const handleClick = () => {
        const db = getFirestore()
        const ordenesCollection = collection(db, 'ordenes')

        addDoc(ordenesCollection, Orden)
            .then(({ id }) => console.log(id))
    }

    if (carroProd.length === 0) {
        return (
            <>
                <p className="tituloNada"> No hay elementos en el carrito</p>
                <Link to='/' className="tituloAlgo"> Compranos  algo  </Link>
            </>
        )
    }
    return (
        <>
            <div className="itemFinal">{
                carroProd.map(producto => <ItemCart key={producto.id} producto={producto} />)
            }
            </div>
                <p className="tituloTotal">total: $ {precioTotal()}</p>
                <button className="tituloPagar" onClick={handleClick}>Pagar</button>
        </>
    )

}
export default Cart


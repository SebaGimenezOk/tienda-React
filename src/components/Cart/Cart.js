/* eslint-disable no-unused-vars */
import React from "react";
import './Cart.scss'
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import Modal from "../Modal/Modal";



const Cart = () => {

    const [showModal, setShowModal] = useState(false)
    const { carroProd, precioTotal, limpiarCarro } = useCartContext();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    }
    )

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const [success, setSuccess] = useState()

    const [Order, setOrder] = useState({
        buyer: {},
        items: carroProd.map(producto => ({ id: producto.id, title: producto.title, price: producto.price, quantity: producto.quantity })),
        total: precioTotal()
    })


    const submitData = (e) => {
        e.preventDefault()
  
        pushData({ ...Order, buyer: formData })

    }
    const db = getFirestore()

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const OrderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(OrderDoc.id)
    
    }

    if (carroProd.length === 0) {
        return (
            <div className="fondox">
                <p className="tituloNada"> No hay elementos en el carrito</p>
           <Link to='/' className="tituloAlgo"> Compremos  algo</Link>  
            </div>


        )
    }
    return (
        <>
            <div className="itemFinal">
                {
                    carroProd.map(producto => <ItemCart key={producto.id} producto={producto} />)
                }
            </div>

            <p className="tituloTotal">total: $ {precioTotal()}</p>
            <button className="tituloCaja" onClick={() => setShowModal(true)}>Ir a la Caja</button>
            {showModal &&
                <Modal close={() => setShowModal()}>
                    {success ? (
                        <div className="CajaTicketFinal">
                            <img className="logoModal" src="/assets/favicon-blanco.png" alt="logo" />
                            <h2 className="tituloTicketFinal"> Compra realizada con éxito. </h2>
                            <button className="limpiar" onClick={() => limpiarCarro()}>Salir</button>
                        </div>
                    ) : (
                        <form className='formularioTicket' onSubmit={submitData}>
                            <h2 className="tituloTicket">Decinos adonde enviamos tu pedido</h2>
                            <img className="logoModal" src="/assets/favicon-blanco.png" alt="logo" />
                            <input
                                className="linealTicket"
                                type='text'
                                name='name'
                                placeholder='Nombre'
                                onChange={handleChange}
                                value={formData.name} />
                            <input
                                className="linealTicket"
                                type='number'
                                name='phone'
                                placeholder='numero'
                                onChange={handleChange}
                                value={formData.phone} />
                            <input
                                className="linealTicket"
                                type='email'
                                name='email'
                                placeholder='email'
                                onChange={handleChange}
                                value={formData.email} />
                            <button type="submit" className="tituloPagar2">Enviar</button>
                        </form>)}

                </Modal>}


        </>
    )

}
export default Cart


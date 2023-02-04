import React, { useContext, useEffect, useState } from "react"
import { obtenerOrden } from "../../services/firebase";
import { cartContext } from "../../storage/cartContext"
import Button from "../Button/Button";
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function CartContainer() {
    const { cart, clearCart, removeItem, totalPrice } = useContext(cartContext)

    function handleCheckout(e) {
        const items = cart.map(({id, price, cantidad, title, model}) => ({ id, price, cantidad, title, model }))
        const order = {
            buyer: {
                name: "Esteban",
                email: "estebanbogoya@gmail.com",
                phone: 3188216700
            },
            items: items,
            total: totalPrice(),
            date: new Date()
        }
        obtenerOrden(order).then((id)=>{
            Swal.fire({
                icon: 'success',
                title: 'Compra hecha!',
                text: `El id de tu compra es ${id}, y el total de tu compra es: $${order.total}` ,
              })
            clearCart(); 
            
        })
        
    }

    if (cart.length === 0) {
        return (
            <>
            <h1>Carrito Vacio</h1>
            <Link to = "/">
            <Button className="btn btn-secondary">Volver a Items</Button>
            </Link>
            </>
        )
    } else {
        return (
            <div className="itemDetail">
                <h1>Este es tu Carrito</h1>
                {cart.map(itemInCart => {
                    let keyCart = itemInCart.id
                    return (
                        <div key={keyCart} className="cardProductos containerDetail">
                            <h2>{itemInCart.title}</h2>
                            <h3>{itemInCart.model}</h3>
                            <h4>Cantidad:{itemInCart.cantidad}</h4>
                            <img className="img" src={itemInCart.image} alt="Imagen del carrito" />
                            <h2>${itemInCart.price}</h2>
                            <Button onClick={() => removeItem(itemInCart.id)} className="btn btn-danger">Eliminar</Button>
                        </div>
                    )
                })
                }
                <div className="containerDetail">
                    <Button onClick={clearCart} className='btn btn-danger'>Vaciar Carrito</Button>
                    <h1>El total de la compra es: ${totalPrice()}</h1>
                    <Button onClick={handleCheckout} className="btn btn-success">Finalizar Compra</Button>
                </div>
            </div>
        )
    }
}


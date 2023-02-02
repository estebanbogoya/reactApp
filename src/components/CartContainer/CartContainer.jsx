import React, { useContext, useEffect, useState } from "react"
import { cartContext } from "../../storage/cartContext"
import Button from "../Button/Button";

export default function CartContainer() {
    const { cart, clearCart, removeItem, totalPrice } = useContext(cartContext)
    
    if (cart.length===0) {
        return(
            <h1>Carrito Vacio</h1>
        )    
    }else{ 
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
                        <img className="img"src={itemInCart.image} alt="Imagen del carrito" />
                        <h2>${itemInCart.price}</h2>
                        <Button onClick = {()=>removeItem(itemInCart.id)} className="btn btn-danger">Eliminar</Button>
                    </div>
                )
            })
            }
            <div className="containerDetail">
            <Button onClick={clearCart} className='btn btn-danger'>Vaciar Carrito</Button>
            <h1>El total de la compra es: ${totalPrice()}</h1>
            </div>
        </div>
    )
}}


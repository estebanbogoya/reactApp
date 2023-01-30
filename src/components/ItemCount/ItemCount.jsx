import React, { useState } from "react";
import Button from "../Button/Button";
import './itemcount.css'

export default function ItemCount({onAddToCart}) {
    let stock = 10
    const [cantidad, setCantidad] = useState(1)

    function bajarCantidad() {
        setCantidad(cantidad - 1)
        if (cantidad <= 1) {
            alert("No hay elementos para quitar")
            setCantidad(1)
        }
    }
    function subirCantidad() {
        setCantidad(cantidad + 1)
        if (cantidad >= stock) {
            alert("No hay mas elementos en el stock")
            setCantidad(10)
        }
    }

    return (
        <div className="containerBotones">
            <Button onClick = {()=>onAddToCart(cantidad)} className="addCart">Agregar al Carrito</Button>
            <div className="itemCount">
                <Button onClick={bajarCantidad} className="btn">-</Button>
                <p className="parra">{cantidad}</p>
                <Button onClick={subirCantidad} className="btn">+</Button>
            </div>
        </div>
    )
}
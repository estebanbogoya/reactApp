import React, { useState } from "react";
import './itemcount.css'

export default function ItemCount() {
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
    function agregarAlCarrito(){
        alert(`Agregaste ${cantidad} articulos al carrito`)
        setCantidad(1)
    }

    return (
        <div className="containerBotones">
            <button onClick = {agregarAlCarrito}className="addCart">Agregar al Carrito</button>
            <div className="itemCount">
                <span onClick={bajarCantidad}>-</span>
                <p>{cantidad}</p>
                <span onClick={subirCantidad}>+</span>
            </div>
        </div>
    )
}